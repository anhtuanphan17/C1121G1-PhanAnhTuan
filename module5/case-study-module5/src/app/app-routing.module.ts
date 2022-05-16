import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer-component/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-component/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-component/customer-edit/customer-edit.component';


const routes: Routes = [
  {path: '', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/edit/:id', component: CustomerEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
