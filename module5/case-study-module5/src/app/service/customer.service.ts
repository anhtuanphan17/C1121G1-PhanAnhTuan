import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../model/ICustomer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  customerApi = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) {
  }

  getAllCustomer(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customerApi);
  }

  saveCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.customerApi, customer);
  }

  findCustomerById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.customerApi + '/' + id);
  }

  updateCustomer(id: number, customer: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomer>(this.customerApi + '/' + id, customer);
  }

  deleteCustomer(deleteCustomer: ICustomer): Observable<ICustomer> {
    return this.http.delete<ICustomer>(this.customerApi + '/' + deleteCustomer.id);
  }
}
