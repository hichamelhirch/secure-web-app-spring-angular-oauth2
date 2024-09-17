import {APP_INITIALIZER, NgModule} from '@angular/core';
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
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProfileComponent } from './profile/profile.component';




function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8081',
        realm: 'ecom-web-app',
        clientId: 'front-end-angular-client'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}



@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    KeycloakAngularModule,
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
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
