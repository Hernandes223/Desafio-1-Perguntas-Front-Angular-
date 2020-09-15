import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  result: any = [];
    today: number

  constructor(
    private service: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.lisQuestionAnswers();

  }

  lisQuestionAnswers(){
    this.service.questionsAnswers().then((data) => {
      this.result = data
      this.today = Date.now()
      console.log(this.today)
      console.log('data', data)
    })
  }

  onLogout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
