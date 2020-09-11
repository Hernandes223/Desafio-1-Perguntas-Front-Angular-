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

  questions: any = [];
  perguntasDeCada: any;
  meuModelTeste: any;

  constructor(private service: AccountService,) { }

  ngOnInit(): void {
    this.lisQuestion();
    // this.users = JSON.parse(localStorage.getItem('user'))
  }

  lisQuestion() {
    this.service.questions().then((data) => {
      this.questions = data;
      console.log(data);
    })
  }

  doAnwser() {
    const epcEpi = this.questions.options.map((pergunta) => {
      const { id = null, resposta = null } = pergunta;
      return {
        id,
        resposta,
      };
    });
    this.perguntasDeCada = [...epcEpi];
    console.log("minhas perguntas", this.perguntasDeCada)

  }

}
