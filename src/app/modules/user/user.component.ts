import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Constants } from "app/commons/constants/constants.service";
import { NavBarService } from '../../commons/services/nav-bar.service';
import { UserService } from "app/commons/services/user.service"
import { AuthStorageService } from "app/commons/services/auth-storage.service";
import { User } from "../../commons/models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  form: FormGroup;
  userService;
  user: User = new User();

  constructor(public nav: NavBarService,
    userService: UserService,
    public authStorageService: AuthStorageService,
    public router: Router
  ) {
    this.userService = userService;
  }

  ngOnInit() {
    this.nav.clientMenu();
    this.createFormControls();
    
  }

  createFormControls() { 
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]), 
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]), 
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      password: new FormControl('', [ 
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("[\\w\\-\\s\\/]+")
        //Validators.pattern("[^ @]*@[^ @]*") 
      ])
    });
  }

  register(){
 
    var result,
    router = this.router,
    user = this.form.value,
    body = {
      user: {
        "username": user.username,
        "firstname": user.firstname,
        "lastname": user.lastname,
        "email": user.email,
        "password": user.password
      }
    };

    result = this.userService.create(body);
    this.router.navigate(['panel']);
  }

}

