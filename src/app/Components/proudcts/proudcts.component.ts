import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountOffers } from '../../Models/discount';
import { ICategory } from '../../Models/icategory';
import { IProuduct } from '../../Models/iproduct';
import { StoreShop } from '../../Models/store';
import { FormsModule } from '@angular/forms';
import { ShadowCardDirective } from '../../Directives/shadow-card.directive';
import { CridetCardPipe } from '../../Pipes/cridet-card.pipe';
import { ProductsService } from '../../Services/products.service';
import { Router } from '@angular/router';
import { ProductsWithApiService } from '../../Services/products-with-api.service';
import { CategoriesWithApiService } from '../../Services/categories-with-api.service';
import { environment } from '../../../environments/environment.development';


@Component({
  selector: 'app-proudcts',
  standalone: true,
  imports: [FormsModule,CommonModule,ShadowCardDirective,CridetCardPipe],
  templateUrl: './proudcts.component.html',
  styleUrl: './proudcts.component.scss'
})
export class ProudctsComponent implements OnInit {
  ProductsAfterFilter:IProuduct[] = []; 
  Categories:ICategory[] = [];

  constructor(private productService:ProductsService ,private categoriesWithApiService:CategoriesWithApiService ,private router:Router,private productsWithApiService:ProductsWithApiService) {}
  ngOnInit(): void {
    //  this.ProductsAfterFilter= this.productService.getAllProducts();

    this.productsWithApiService.GetAllProducts().subscribe({
      next:(data)=>{
        this.ProductsAfterFilter = data
      },
      error:(err)=>{
        console.log(err)
      }
    })

    this.categoriesWithApiService.getAllCategories().subscribe({
      next:(data)=>{
        this.Categories = data
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }

  ClientName:string = 'Mahmoud';
  buttonCheck:boolean = true;
  discount:DiscountOffers = DiscountOffers.value1;
  store:StoreShop = new StoreShop('Shop Store' ,['Cairo','Alex','Sohag'] , 'data:image/jpeg;base64,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');

 
  toggleButton(){
    this.buttonCheck = !this.buttonCheck;
  }

  NewProudct:IProuduct = {
    id:1,
    name:'Laptop',
    price:1000,
    quantity:10,
    PrdimgURL:'https://images-cdn.ubuy.co.id/64c41e4771c5f52216163af1-hp-stream-14-laptop-intel-celeron.jpg', 
    description:'New Laptop',
    categoryID:1,
    Material:'Engineered Wood'
  }


  filterId :number = 0;
 

  filteration(){
    if(this.filterId == 0){
      this.productsWithApiService.GetAllProducts().subscribe({
        next: (data) => {
          this.ProductsAfterFilter = data
        }
      });
    }else{
      this.productsWithApiService.getProductsByCategoryId(this.filterId).subscribe({
        next: (data) => {
          this.ProductsAfterFilter = data.filter(p => p.categoryID == this.filterId);
        }
      })
    }
  }

  @Input() set filterByNameFromParent(value: string) {
    // this.ProductsAfterFilter =  this.productService.filterProducts(value);
    
     this.productsWithApiService.GetAllProducts().subscribe({
      next: (data) => {
        this.ProductsAfterFilter = data.filter(p => p.name.toLowerCase().includes(value));
      }
    })
  }

  @Output() NewPrdInCart:EventEmitter<IProuduct> = new EventEmitter<IProuduct>();

  addToCart(product:IProuduct){
    this.NewPrdInCart.emit(product);
  }

  showDetails(productId:number){
    this.router.navigate(['/products-details',productId]);
  }

  searchWithMaterial(material:string){
    this.productsWithApiService.SearchOnProductsMaterial(material).subscribe({
      next: (data) => {
        this.ProductsAfterFilter = data
      }
    })
  }
}
