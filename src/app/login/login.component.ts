import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userform: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userform = this.fb.group({
      
      'email': new FormControl('', [Validators.required, Validators.email]),
      'pwd': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });
  }
//HDFC0009098
}
