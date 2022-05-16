import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../../model/ICustomer';
import {CustomerService} from '../../service/customer.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  check = false;
  deleteCustomer: ICustomer;
  customers: ICustomer[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.findAllCustomer();
  }

  findAllCustomer() {
    this.customerService.getAllCustomer().subscribe((customers) => {
      this.customers = customers;
      console.log(this.customers);
    });
  }

  onOpenEditModal(a: ICustomer): void {
    console.log('haha');
    this.deleteCustomer = a;
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#deleteModal');
    container.appendChild(button);
    this.check = true;
    button.click();
  }

  delete(event) {
    this.customerService.deleteCustomer(this.deleteCustomer).subscribe(() => {
      event.click();
      this.ngOnInit();
    }, (error: HttpErrorResponse) => {
      alert('error');
    });
  }

}
