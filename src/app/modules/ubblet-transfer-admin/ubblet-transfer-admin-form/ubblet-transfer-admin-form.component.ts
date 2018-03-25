import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { UbbletTansferAdmin } from '../../../commons/models/ubblet-transfer-admin';
import { UbbletTransferAdminService } from '../../../commons/services/ubblet-transfer-admin.service';
import { BasicValidators } from '../../shared/basic-validators';
import { NavBarService } from '../../../commons/services/nav-bar.service';

declare var swal: any;

@Component({
  selector: 'app-ubblet-transfer-admin-form',
  templateUrl: './ubblet-transfer-admin-form.component.html',
  styleUrls: ['./ubblet-transfer-admin-form.component.css']
})
export class UbbletTransferAdminFormComponent implements OnInit {

  private fileObject:any;
  private imageDefault = "../../assets/img/default/default-camera.png";
  public imagePrevisual = this.imageDefault;
  form: FormGroup;
  title: string;
  title_modal:string;
  button:string;
  fileErrorMessage:string = "";
  fileError:boolean = false;
  ubbletTransfer: UbbletTansferAdmin = new UbbletTansferAdmin();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private transferService: UbbletTransferAdminService,
    private domSanitizer: DomSanitizer,
    public nav: NavBarService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]]
    });
  }

  ngOnInit() {
    this.nav.adminMenu();

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Moneda' : 'Nuevo Moneda';
      this.title_modal = id ? 'Editado Exitosamente' : 'Agregado Exitosamente';
      this.button = id ? 'Editar' : 'Agregar';

      if (!id)
        return;

      this.transferService.getTransfer(id)
        .subscribe(
          ubbletTransfer => this.ubbletTransfer = ubbletTransfer.ubbletTransfer,
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
        currency = this.form.value,
        body = {
          "currency": {
            "name": this.form.value.name,
            "image": this.imagePrevisual
          }
        };

    if (this.ubbletTransfer.id){
      result = this.transferService.update(this.ubbletTransfer.id, body);
    } else {
      result = this.transferService.create(body);
    }

    result.subscribe((response) => {

              if((response == 200) || (response.currency.id > 0)){
                  swal({
                    title: this.title_modal,
                    type: 'success',
                    timer: 1250,
                    showConfirmButton: false
                  }).catch(swal.noop,
                      setTimeout(function () {
                        router.navigate(['admin/currency']);
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

