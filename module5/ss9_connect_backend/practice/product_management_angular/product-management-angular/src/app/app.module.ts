import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './component/category/category.component';
import { HttpClientModule} from "@angular/common/http";
import { CategoryCreateComponent } from './component/category-create/category-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CategoryEditComponent } from './component/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryCreateComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
