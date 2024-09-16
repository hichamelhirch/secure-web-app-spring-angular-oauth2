import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'frontend';
  productsForm!:FormGroup;
constructor(private http:HttpClient) {
}


  toggle() {

  }

  ngOnInit(): void {

  }
}
