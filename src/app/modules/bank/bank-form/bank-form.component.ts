import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Bank } from '../../../commons/models/bank';
import { BankService } from '../../../commons/services/bank.service';
import { BasicValidators } from '../../shared/basic-validators';
import { NavBarService } from '../../../commons/services/nav-bar.service';

declare var swal: any;

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent implements OnInit {

  private fileObject:any;
  private imageDefault = "../../assets/img/default/default-camera.png";
  public imagePrevisual = this.imageDefault;
  form: FormGroup;
  title: string;
  title_modal:string;
  button:string;
  fileErrorMessage:string = "";
  fileError:boolean = false;
  bank: Bank = new Bank();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private bankService: BankService,
    private domSanitizer: DomSanitizer,
    public nav: NavBarService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
      comission_percent: ['', [
        Validators.required,
        Validators.maxLength(3)
      ]],
      comission: ['', [
        Validators.required,
        Validators.maxLength(3)
      ]]
    });
  }

  ngOnInit() {
    this.nav.adminMenu();

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Banco' : 'Nuevo Banco';
      this.title_modal = id ? 'Editado Exitosamente' : 'Agregado Exitosamente';
      this.button = id ? 'Editar' : 'Agregar';

      if (!id)
        return;
      this.bankService.getBank(id)
        .subscribe(
          bank => this.bank = bank.bank,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        router = this.router,
        bank = this.form.value,
        body = {
          "bank": {
            "name": this.form.value.name,
            "comission_percent": this.form.value.comission_percent,
            "comission": this.form.value.comission,
            "image": this.imagePrevisual
          }
        };

    if (this.bank.id){
      result = this.bankService.updateBank(this.bank.id, body);
    } else {
      result = this.bankService.addBank(body);
    }

    result.subscribe(response =>  {
      console.log(response.bank);

              if((response == 200) || (response.bank.id > 0)){
                  swal({
                    title: this.title_modal,
                    type: 'success',
                    timer: 1250,
                    showConfirmButton: false
                  }).catch(swal.noop,
                      setTimeout(function () {
                        router.navigate(['admin/bank']);
                      }, 1750)
                  );
              }
              if(response.error == 400){
                  swal(
                    'Ocurrio un error',
                    'Inténtelo más tarde !',
                    'error'
                  )
              }
              if(response == 422){
                  swal(
                    'Verifique',
                    'Algunos de los datos, no son válidos',
                    'warning'
                  )
              }
          });

  }

  handleFileSelect(evt){
      var files = evt.target.files;
      var file = files[0];
      this.fileObject = files[0];

    if (files && file) {
        this.validateFile(file);
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsDataURL(file);
    }else{
        swal(
          'Verifique',
          'Problemas para cargar la imagen',
          'warning'
        )      
    }
  }
  
  _handleReaderLoaded(readerEvt) {
      this.imagePrevisual = readerEvt.target.result;

      if(this.fileError){
        this.imagePrevisual = this.imageDefault;
      }
  }

  validateFile(f){

    var allowedExt = ["jpg","jpeg","png","JPG","JPEG","PNG"],
        fileExt = f.type.split('/').pop();

    if(this.isInArray(allowedExt, fileExt)) {
        this.fileErrorMessage = "";
        this.fileError = false;
    } else {
        this.fileErrorMessage = "Sólo fotos en formato jpg, jpeg, png estan permitidas";
        this.fileError = true;
    }

    if(Number(f.size) > 2000000){
      this.fileErrorMessage = "El tamaño de la imagen es muy grande";
      this.fileError = true;
    }

  }

  isInArray(array, word) {
      return array.indexOf(word.toLowerCase()) > -1;
  }

}

