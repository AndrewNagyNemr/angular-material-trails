import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate;
  minDate;

  constructor() { }

  ngOnInit(): void {
    //To set max birth date 21 years ago
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 21)
    //To set min birth date 90 years ago
    this.minDate = new Date();
    this.minDate.setFullYear(this.minDate.getFullYear() - 90)
  }

  submit(form : NgForm){
    console.log(form.value);

  }

}
