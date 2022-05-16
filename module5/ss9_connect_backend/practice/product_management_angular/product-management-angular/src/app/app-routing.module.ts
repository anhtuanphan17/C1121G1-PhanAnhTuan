import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryComponent} from './category-component/category/category.component';
import {CategoryCreateComponent} from './category-component/category-create/category-create.component';
import {CategoryEditComponent} from './category-component/category-edit/category-edit.component';
import {ProductComponentComponent} from './product/product-component/product-component.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';


const routes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'category/create', component: CategoryCreateComponent},
  {path: 'category/edit/:id', component: CategoryEditComponent},
  {path: 'product/list', component: ProductComponentComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
