import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {KeycloakProfile} from "keycloak-js";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  public profile? : KeycloakProfile;

constructor(private http:HttpClient,public keycloakService : KeycloakService) {
}



  onLogout() {
    this.keycloakService.logout(window.location.origin);
  }

  async login() {
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }
}
