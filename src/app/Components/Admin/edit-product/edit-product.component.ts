import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../../Models/icategory';
import { IProuduct } from '../../../Models/iproduct';
import { ProductsWithApiService } from '../../../Services/products-with-api.service';
import { CategoriesWithApiService } from '../../../Services/categories-with-api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({});
  productId: number = 0;
  currentProduct: IProuduct | undefined = undefined;
  categories: ICategory[] = [];

  constructor(private fb: FormBuilder, private activatedRotute: ActivatedRoute, private router: Router, private productsWithApiService: ProductsWithApiService, private categoryService: CategoriesWithApiService) {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      Material: [''],
      PrdimgURL: [''],
      categoryID: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data
      }
    })

    this.activatedRotute.paramMap.subscribe((param) => {
      this.productId = Number(param.get('id')) || 0;
      this.productsWithApiService.getProductsById(this.productId.toString()).subscribe({
        next: (data) => {
          this.currentProduct = data
          this.productForm.patchValue(this.currentProduct)
        },
        error: (err) => {
          this.router.navigate(['**'])
        }
      });

    })
  }

  UpdateProduct() {
    this.productsWithApiService.UpdateProduct(this.productForm.value).subscribe({
      next: (data) => {
        this.router.navigate(['/ListProduct'])
        console.log('Product updated successfully');
      },
      error: (err) => {
        console.error('Failed to update product', err);
      }
    })
  }


}
