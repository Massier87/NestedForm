import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {PhoneBook} from "./phone-book.interface";



@Component({
  selector: 'customer-page',
  templateUrl: './email.component.html'
})
export class TelephoneComponent implements  OnInit
{

  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      emails: this._fb.array([]),
      telephones: this._fb.array([])
    });

    this.addcontrolers();
  }

  initAddress() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  initEmail(){
    return this._fb.group({
      email: ['', Validators.required]
    })
  }

  initTelephone(){
    return this._fb.group({
      telephone: ['', Validators.required]
    })
  }

  addcontrolers() {

    const emailControl = <FormArray>this.myForm.controls['emails'];
    const emailCtrl = this.initEmail();

    emailControl.push(emailCtrl);


    const telephoneControl = <FormArray>this.myForm.controls['telephones'];
    const teleCtrl = this.initTelephone();

    telephoneControl.push(teleCtrl);
  }

  removeEmail(i: number) {
    const emailcontrol = <FormArray>this.myForm.controls['emails'];
    emailcontrol.removeAt(i);
  }

  removeTelephone(i: number) {
    const telecontrol = <FormArray>this.myForm.controls['telephones'];
    telecontrol.removeAt(i);
  }

  save(model: PhoneBook) {
    // call API to save
    // ...
    console.log(model);
  }
}
