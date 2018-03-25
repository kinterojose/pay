import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../commons/services/language.service";
import { NavBarService } from '../../commons/services/nav-bar.service';
import {Language} from "../../commons/models/language";

declare var swal: any;

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  private languages: Language[] = []

  constructor(private languageService: LanguageService,  public nav: NavBarService ) { }

  ngOnInit() {
    this.nav.adminMenu();

    this.languageService.getLanguages()
      .subscribe(data => this.languages = data.languages);
  }

  deleteLanguage(language){
    var service = this.languageService,
        languages = this.languages;

    swal({
      title: 'Esta Seguro',
      text: "Se eliminara \"(" + language.name + ")\" permanentemente",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0288d1',
      cancelButtonColor: '#cc0000',
      confirmButtonText: 'ELIMINAR',
      cancelButtonText: 'CANCELAR'
    }).then(function () {
      var index = languages.indexOf(language),
          error = false;
      languages.splice(index, 1);

      service.deleteLanguage(language.id)
      .subscribe(null,
      err => {
        error = true;
        // Revert the view back to its original state
        languages.splice(index, 0, language);
      });
      if(error){
        swal(
          'Ups!',
          'Se presentó problemas para eliminar, intentelo más tarde',
          'warning'
        )
      }else{
        swal(
          'Eliminado!',
          'Exitosamente ',
          'success'
        )        
      }
    }).catch(swal.noop);

  }



}



