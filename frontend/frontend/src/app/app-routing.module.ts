import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllProductsComponent} from "./all-products/all-products.component";
import {AuthGuard} from "./guards/auth.guard";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: "products", component: AllProductsComponent, canActivate: [AuthGuard], data: {roles: ['USER']}
  },
  {path: "profile",component:ProfileComponent,canActivate:[AuthGuard],data:{roles: ['ADMIN','USER']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
