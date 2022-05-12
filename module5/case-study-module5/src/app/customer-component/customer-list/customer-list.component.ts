import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../model/ICustomer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] =[
    {
      customerId: 1,
      customerCode: 'KH-001',
      customerName: 'Anh Tuan',
      customerBirthday: '1995-12-17',
      customerGender: '1',
      customerIdCard: '214101101',
      customerPhone: '0954333333',
      customerEmail: 'tuanphan@gmail.com',
      customerAddress: 'DakLak',
      customerTypeId: 2,
    },
    {
      customerId: 2,

      customerCode: 'KH-0002',

      customerName: 'Phạm Xuân Diệu',

      customerBirthday: '1992-08-08',

      customerGender: '1',

      customerIdCard: '865342123',

      customerPhone: '0954333333',

      customerEmail: 'xuandieu92@gmail.com',

      customerAddress: 'K77/22 Thái Phiên, Quảng Trị',

      customerTypeId: 3,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
