import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatList, MatListItem, MatNavList} from "@angular/material/list";
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AllProductsComponent } from './all-products/all-products.component';
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from "@angular/material/card";
import { MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatSort, MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatNavList,
    MatDividerModule,
    MatPaginatorModule,
    MatCardHeader,
    MatCardTitle,
    MatTableModule,
    MatCardContent,
    MatCardModule,
    MatSortModule,
    MatPaginator,
    MatListItem,
    MatList

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
