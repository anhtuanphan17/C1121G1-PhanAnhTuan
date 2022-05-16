import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from "./component/category/category.component";
import {CategoryCreateComponent} from "./component/category-create/category-create.component";
import {CategoryEditComponent} from "./component/category-edit/category-edit.component";


const routes: Routes = [
  {path: "",component: CategoryComponent},
  {path: "category/create",component: CategoryCreateComponent},
  {path: "category/edit/:id",component: CategoryEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
