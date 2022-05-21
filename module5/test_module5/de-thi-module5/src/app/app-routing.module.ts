import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TinListComponent} from "./component/tin/tin-list/tin-list.component";
import {TinCreateComponent} from "./component/tin/tin-create/tin-create.component";


const routes: Routes = [
  {path: 'tin/list', component:TinListComponent},
  {path: 'tin/create', component:TinCreateComponent},
  // {path: 'product/edit/:id', component:ProductEditComponent},
  // {path: 'tin/list', component:CategoryListComponent},
  // {path: 'tin/create', component:CategoryCreateComponent},
  // {path: 'tin/edit/:id', component:CategoryEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
