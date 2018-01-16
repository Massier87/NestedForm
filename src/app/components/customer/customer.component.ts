import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "./customer.interface";


@Component({
  selector: 'customer-page',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements  OnInit
{

  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([])
    });

    this.addAddress();
  }

  initAddress() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    const addrCtrl = this.initAddress();

    control.push(addrCtrl);

  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }

  save(model: Customer) {
    // call API to save
    // ...
    console.log(model);
  }
}
