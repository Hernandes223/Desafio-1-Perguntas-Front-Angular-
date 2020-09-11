import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formAnswer: FormGroup;

  users: any;

  value: any;

  questions = [];

  constructor(private service: AccountService,) { }

  ngOnInit(): void {
    this.lisQuestion();
    this.users = JSON.parse(localStorage.getItem('user'))
  }

  lisQuestion(){
    this.service.questions().then((data) => {
      this.questions = data;
      console.log(data);
    })
  }

  doAnswer(){
    // var dados = {
    //   answer: this.formAnswer.value.answer,
    //   question_id: this.id,
    //   user_id: this.users.id,
    // }
    console.log(this.value)
    // this.service.answer(dados).then((data) => {
    //   console.log(data)
    // })
  }

}
