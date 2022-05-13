import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerEditForm: FormGroup;
  constructor() {
    this.customerEditForm = new FormGroup({
      customerId: new FormControl(),
      customerCode: new FormControl('KH-0001  ', [Validators.required, Validators.pattern('^(KH-){1}\\d{4}$')]),
      customerName: new FormControl('Phan Anh Tuan', [Validators.required]),
      customerBirthday: new FormControl('26/12/1995', [Validators.required]),
      customerGender: new FormControl('1', [Validators.required]),
      customerIdCard: new FormControl('195666555', [Validators.required, Validators.pattern('^\\d{9}$')]),
      customerPhone: new FormControl('0901919195', [Validators.required, Validators.pattern('^$|^(0|\\(84\\)\\+)9[0|1]\\d{7}$')]),
      customerEmail: new FormControl('tuanphan@gmail.com', [Validators.required, Validators.email]),
      customerAddress: new FormControl('DakLak', [Validators.required]),
      customerTypeId: new FormControl('1', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  submitCustomerEditForm() {
    console.log(this.customerEditForm);
  }
}
