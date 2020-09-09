import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AccountService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });

  }

  doLogin(){
    var dados = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    }
    this.service.login(dados).then((data) => {
      localStorage.setItem("token", data.access_token);
      this.router.navigate(['/home']);
      console.log(data)
    })
  }

}
