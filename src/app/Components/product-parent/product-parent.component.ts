import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProuduct } from '../../Models/iproduct';
import { ProudctsComponent } from '../proudcts/proudcts.component';

@Component({
  selector: 'app-product-parent',
  standalone: true,
  imports: [ProudctsComponent,FormsModule],
  templateUrl: './product-parent.component.html',
  styleUrl: './product-parent.component.scss'
})
export class ProductParentComponent {

  filterByName:string = '';

  proudctInCart:IProuduct[] = []
  cart(newPrd:IProuduct){
    
    this.proudctInCart.push(newPrd)

  }

}
