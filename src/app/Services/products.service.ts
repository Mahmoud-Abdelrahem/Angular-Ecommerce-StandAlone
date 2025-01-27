import { Injectable } from '@angular/core';
import { IProuduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Products:IProuduct[];
  constructor() { 
    this.Products = [
      {id:1, name: 'Odense 8-Seater Top Dining Table', price: 21500, quantity:0, PrdimgURL:'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Engineered Wood', purchaseDate: new Date()},
      {id:5, name: 'Trixia 4-Seater Glass Top Dining Table', price: 30000, quantity:8, PrdimgURL:'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Metal',purchaseDate: new Date()},
      {id:25, name: 'Gasha Marble Top Side Table', price: 14000, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Metal',purchaseDate: new Date()},
      {id:7, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:2, PrdimgURL:'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating',purchaseDate: new Date()},
      {id:17, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:2, PrdimgURL:'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating',purchaseDate: new Date()},
      {id:9, name: 'Boston Study Chair', price: 1000, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
      {id:10, name: 'Coby Extendable TV Unit', price: 13000, quantity:0, PrdimgURL:'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'Wood'},
      {id:15, name: 'Accent TV Unit', price: 36999, quantity:4, PrdimgURL:'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'MDF'},
      {id:55, name: 'Plymouth TV Unit', price: 36999, quantity:3, PrdimgURL:'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'wood'},
  
    ]
  }

  getAllProducts(){
    return this.Products;
  }
  filterProducts(filterValue:string): IProuduct[] {
    filterValue = filterValue.toLowerCase()
    if(filterValue == '' ){
      return this.Products;
    } 

     return this.Products.filter((product: IProuduct) => product.name.toLowerCase().includes(filterValue));
  }

  getProductsById(id:number): IProuduct | undefined {
    return this.Products.find((product:IProuduct) => product.id == id);
  }

  getAllProductIds():number[]{
    return this.Products.map(prd=> prd.id)
  }
}
