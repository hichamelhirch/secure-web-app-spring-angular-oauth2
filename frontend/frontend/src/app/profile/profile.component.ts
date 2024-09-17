import { Component } from '@angular/core';
import {KeycloakProfile} from "keycloak-js";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  public profile? : KeycloakProfile;

 constructor(public keycloakService:KeycloakService) {
 }
  ngOnInit(): void {
    if(this.keycloakService.isLoggedIn()){
      this.keycloakService.loadUserProfile().then(profile=>{
        this.profile=profile;
      });
    }
  }

}
