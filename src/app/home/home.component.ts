import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { JSDocCommentStmt, ThrowStmt } from '@angular/compiler';
import { Option, Question, Quiz } from '../models/index';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myQuestions: any = [];

  data: any = [];

  options: any = [];
  questions: any = [];
  meuModelTeste: any;
  id: any;
  codigo: any;
  user : any;

  formQuestion: FormGroup;

  constructor(
    private service: AccountService,
    private formBuilder: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.lisQuestion();

    this.formQuestion = this.formBuilder.group({
    });
  }

  lisQuestion() {
    this.service.questions().then((data) => {
      this.questions = data
      this.questions.forEach(element => {
        let control = new FormControl(
          false,
          Validators.compose([
            Validators.required
          ]));
          this.formQuestion.addControl('dns' + element.id, control);
      });
    })

  }

  doAnswer(){
   this.data.forEach(element => {
    this.service.answer(element).then((data) => {
      console.log(data)
    })
    this.router.navigate(['/result']);
   });
  }

  onClick(items,option){
    this.data = this.data.filter(item => item.question_id != items.id)
    var user = localStorage.getItem("user_id");
    this.data.push({
        answer: option.value,
        question_id: items.id,
        user_id: user
    });
  }
  

}
