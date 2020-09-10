import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questions = [];

  constructor(private service: AccountService,) { }

  ngOnInit(): void {
    this.lisQuestion();
  }

  lisQuestion(){
    this.service.questions().then((data) => {
      this.questions = data;
      console.log(data);
    })
  }

}
