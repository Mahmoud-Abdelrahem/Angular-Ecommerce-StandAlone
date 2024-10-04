import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from '../../../Models/icategory';
import { IProuduct } from '../../../Models/iproduct';
import { CategoriesWithApiService } from '../../../Services/categories-with-api.service';
import { ProductsWithApiService } from '../../../Services/products-with-api.service';

@Component({
  selector: 'app-insert-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert-product.component.html',
  styleUrl: './insert-product.component.scss'
})
export class InsertProductComponent implements OnInit {

  product: IProuduct = {} as IProuduct;
  constructor(private productsWithApiService: ProductsWithApiService,private categoriesWithApiService: CategoriesWithApiService, private router: Router) {

  }

  categories: ICategory[] = []
  
  InsertNewProduct(product: IProuduct) {
    this.productsWithApiService.addNewProduct(product).subscribe({
      next: () => {
        this.router.navigate(['/Home'])
        console.log(product)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.categoriesWithApiService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data
      },
      error: (err) => {
        console.log(err)
      }
      
    })
  }

}
