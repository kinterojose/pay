import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Language } from '../../../commons/models/language';
import { LanguageService } from '../../../commons/services/language.service';
import { BasicValidators } from '../../shared/basic-validators';
import { NavBarService } from '../../../commons/services/nav-bar.service';

declare var swal: any;

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {

  private fileObject: any;
  private imageDefault = "../../assets/img/default/default-camera.png";
  public imagePrevisual = this.imageDefault;
  form: FormGroup;
  title: string;
  title_modal: string;
  button: string;
  fileErrorMessage: string = "";
  fileError: boolean = false;
  language: Language = new Language();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private languageService: LanguageService,
    public nav: NavBarService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
      prefix: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]]
    });
  }

  ngOnInit() {
    this.nav.adminMenu();

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Lenguaje' : 'Nuevo Lenguaje';
      this.title_modal = id ? 'Editado Exitosamente' : 'Agregado Exitosamente';
      this.button = id ? 'Editar' : 'Agregar';

      if (!id)
        return;

      this.languageService.getLanguage(id)
        .subscribe(
        language => this.language = language.language,
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
      language = this.form.value,
      body = {
        "language": {
          "name": this.form.value.name,
          "prefix": this.form.value.prefix,
          "image": this.imagePrevisual
        }
      };

    //console.log(body);
    //console.log( JSON.stringify(body));

    if (this.language.id) {
      result = this.languageService.updateLanguage(this.language.id, body);
    } else {
      result = this.languageService.addLanguage(body);
    }

    result.subscribe(response => {
      console.log(response.language);

      if ((response == 200) || (response.language.id > 0)) {
        swal({
          title: this.title_modal,
          type: 'success',
          timer: 1250,
          showConfirmButton: false
        }).catch(swal.noop,
          setTimeout(function () {
            router.navigate(['admin/language']);
          }, 1750)
          );
      }
      if (response.error == 400) {
        swal(
          'Ocurrio un error',
          'Inténtelo más tarde !',
          'error'
        )
      }
      if (response == 422) {
        swal(
          'Verifique',
          'Algunos de los datos, no son válidos',
          'warning'
        )
      }
    });

  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];
    this.fileObject = files[0];

    if (files && file) {
      this.validateFile(file);
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsDataURL(file);
    } else {
      swal(
        'Verifique',
        'Problemas para cargar la imagen',
        'warning'
      )
    }
  }

  _handleReaderLoaded(readerEvt) {
    this.imagePrevisual = readerEvt.target.result;

    if (this.fileError) {
      this.imagePrevisual = this.imageDefault;
    }
  }

  validateFile(f) {

    var allowedExt = ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"],
      fileExt = f.type.split('/').pop();

    if (this.isInArray(allowedExt, fileExt)) {
      this.fileErrorMessage = "";
      this.fileError = false;
    } else {
      this.fileErrorMessage = "Sólo fotos en formato jpg, jpeg, png estan permitidas";
      this.fileError = true;
    }

    if (Number(f.size) > 2000000) {
      this.fileErrorMessage = "El tamaño de la imagen es muy grande";
      this.fileError = true;
    }

  }

  isInArray(array, word) {
    return array.indexOf(word.toLowerCase()) > -1;
  }

}


