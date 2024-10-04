import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProuduct } from '../../Models/iproduct';
import { ProductsService } from '../../Services/products.service';
import { Location } from '@angular/common';
import { ProductsWithApiService } from '../../Services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  AllIds: number[] = [];
  currentIndex: number = 0;
  currentProduct: IProuduct | undefined = undefined;
  constructor(private activatedRotute: ActivatedRoute, private productService: ProductsService, private router: Router,private location:Location,private productsWithApiService:ProductsWithApiService) {



  }
  ngOnInit(): void {
    ///////////////////////////////////////////////////////////////
    // this.productId = Number(this.activatedRotute.snapshot.paramMap.get('id')) || 0;
    // let found = this.productService.getProductsById(this.productId);

    // if (found) {
    //   this.currentProduct = found
    // } else {
    //   this.router.navigate(['**'])
    // }
///////////////////////////////////////////////////////////////
    // this.activatedRotute.paramMap.subscribe((param) => {
    //   this.productId = Number(param.get('id')) || 0;
    //   let found = this.productService.getProductsById(this.productId);
    //   if (found) {
    //     this.currentProduct = found
    //     console.log(found);

    //   } else {
    //     this.router.navigate(['**'])
    //   }
    // })
////////////////////////////////////////////////////////

    this.activatedRotute.paramMap.subscribe((param) => {
      this.productId = Number(param.get('id')) || 0;
      let found = this.productsWithApiService.getProductsById(this.productId.toString()).subscribe({
        next: (data) => {
          this.currentProduct = data
        },
        error: (err) => {
          this.router.navigate(['**'])
        }
      });

    })
    this.AllIds = this.productService.getAllProductIds()
  }

  prev() {
    this.currentIndex = this.AllIds.indexOf(this.productId)
    this.router.navigate(['/products-details', this.AllIds[--this.currentIndex]])
  }
  next() {
    this.currentIndex = this.AllIds.indexOf(this.productId)
    this.router.navigate(['/products-details', this.AllIds[++this.currentIndex]])

  }

  GoBack(){
    this.location.back()
  }
}
