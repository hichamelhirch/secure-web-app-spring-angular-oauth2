import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Product} from "../model/Product.model";
import {ProductService} from "../services/product.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit{
   products!:Array<Product>;
   dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort! :MatSort;
   displayedColumns: string[]=['id','name','price','quantity'];
   constructor(private productService:ProductService) {
   }
  ngOnInit(): void {
     this.productService.getAllProducts().subscribe({
       next :data =>{
         console.log("data =>",data)
         this.products=data
         this.dataSource=new MatTableDataSource(this.products);
         this.dataSource.paginator=this.paginator;
         this.dataSource.sort=this.sort;
       },
       error :err => {
         console.log(err);
       }
     })
  }

}
