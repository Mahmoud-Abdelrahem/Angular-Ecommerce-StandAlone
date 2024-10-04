import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IProuduct } from '../../../Models/iproduct';
import { ProductsWithApiService } from '../../../Services/products-with-api.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent implements OnInit {

  ProductsAfterFilter:IProuduct[] = [];
  constructor(private productsWithApiService: ProductsWithApiService,private router:Router) { }
  ngOnInit(): void {

this.productsWithApiService.GetAllProducts().subscribe({
  next:(data)=>{
    this.ProductsAfterFilter = data
  },
  error:(err)=>{
    console.log(err)
  }
});

  }

  editProduct(productId:number){
    this.router.navigate(['/EditProduct',productId]);
  }
  deleteProduct(productId:number){
    this.productsWithApiService.DeleteProduct(productId).subscribe({
      next:(data)=>{
        this.productsWithApiService.GetAllProducts().subscribe({
          next:(data)=>{
            this.ProductsAfterFilter = data
          },
          error:(err)=>{
            console.log(err)
          }
        });
      },
      error:(err)=>{
        console.log(err)
      }
    });
  }


}
