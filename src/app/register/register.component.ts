import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { DataService } from '../data.service';

import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../upload-file.service';

import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {
  title = 'app';
  public registerdata;

  gender: string = 'Female';
  hobby: string[] = [];
  userform: FormGroup;
  submitted: boolean;
  items = [
    { key: 'music', text: 'Music' },
    { key: 'dance', text: 'Dance' },
    { key: 'cric', text: 'Cricket' },
  ];


  constructor(private fb: FormBuilder,
    private _demoService: DataService,
    private uploadService: UploadFileService,
    private router: Router
  ) { }


  ngOnInit() {

    let checkboxGroup = new FormArray(this.items.map(item => new FormGroup({
      id: new FormControl(item.key),
      text: new FormControl(item.text),
      checkbox: new FormControl(false)
    })));

    let hiddenControl = new FormControl(this.mapItems(checkboxGroup.value), Validators.required);
    // update checkbox group's value to hidden formcontrol
    checkboxGroup.valueChanges.subscribe((v) => {
      hiddenControl.setValue(this.mapItems(v));
    });

    this.userform = this.fb.group({
      'name': new FormControl('', Validators.required),
      'mobile': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'pwd': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'cpwd': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'date3': new FormControl(''),
      'address': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      // 'hobby': new FormControl(''),
      items: checkboxGroup,
      selectedItems: hiddenControl,
      'filename': new FormControl('')

    });
    // this.userform = new FormGroup({
    //  
    // })
    console.log(">>>", this.userform.controls)
  }

  mapItems(items) {
    let selectedItems = items.filter((item) => item.checkbox).map((item) => item.id);
    return selectedItems.length ? selectedItems : null;
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.getData(value);
    console.log(">>>values", value)
  }

  getData(value) {
    var arrayhobbies = [{}];
    arrayhobbies.push({ 'hobbies': value.selectedItems })
    //this.fileToUpload = new File('abc.jpg')


    var data = {
      'name': value.name,
      'mobile': value.mobile,
      'email': value.email,
      'pwd': value.pwd,
      'date3': value.date3,
      'address': value.address,
      'gender': value.gender,
      'selectedItems': arrayhobbies,
      'filename': value.filename

    }

    this._demoService.getData(data).subscribe(
      data => { this.registerdata = data },
      err => console.error(err),
      () =>{
        console.log('done loading data', this.registerdata)
        this.router.navigate(['login']);
      }
      
    );
  }

  /* For File Uploading */
  selectedFiles: FileList;
  currentFileUpload: File;
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event instanceof HttpResponse) {
        console.log('File is uploaded!',event.body['profilepic']);
      }
    });
    this.selectedFiles = undefined;
  }


}


