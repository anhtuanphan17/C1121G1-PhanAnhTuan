import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerCreateForm: FormGroup;
  constructor() {
    this.customerCreateForm = new FormGroup({
      customerId: new FormControl(),
      customerCode: new FormControl('', [Validators.required, Validators.pattern('^(KH-){1}\\d{4}$')]),
      customerName: new FormControl('', [Validators.required]),
      customerBirthday: new FormControl('', [Validators.required]),
      customerGender: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('^$|^(0|\\(84\\)\\+)9[0|1]\\d{7}$')]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerAddress: new FormControl('', [Validators.required]),
      customerTypeId: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  submitCustomerCreateForm() {
    console.log(this.customerCreateForm);
  }
}
