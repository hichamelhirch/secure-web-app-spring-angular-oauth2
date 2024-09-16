import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllProductsComponent} from "./all-products/all-products.component";

const routes: Routes = [
  {path:"products",component:AllProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
