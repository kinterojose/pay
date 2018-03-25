import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Constants } from "app/commons/constants/constants.service";
import { NavBarService } from '../../commons/services/nav-bar.service';
import { SignService } from "app/commons/services/sign.service";
import { AuthStorageService } from "app/commons/services/auth-storage.service";
import { Login } from "../../commons/models/login";
import { User } from "app/commons/models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  signService;
  user: User = new User();

  constructor(public nav: NavBarService,
    formBuilder: FormBuilder,
    signService: SignService,
    public authStorageService: AuthStorageService,
    public router: Router
  ) {
    this.form = formBuilder.group({
      email: [''],
      password: ['']
    });
    this.signService = signService;
  }

  ngOnInit() {
    //this.nav.clientLogin();
  }

  signIn() {
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.signService.in(this.user).subscribe(
      successResponse => {
        this.authStorageService.setToken(successResponse.token);
        this.authStorageService.setUser(successResponse.user);
        this.router.navigate(['client']);
      },
      errorResponse => {
        if (errorResponse.status == Constants.UNAUTHORIZED) {
          console.log('Deja el freno, no tienes sesion');
        } else {
          console.log(errorResponse);
          console.log('Revisa, paso otra cosa');
        }
      }
    )

  }
}

