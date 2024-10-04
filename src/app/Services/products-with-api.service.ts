import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from '../../environments/environment.development';
import { ICategory } from '../Models/icategory';
import { IProuduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  httpHeader ={}
  url:string = `${environment.baseUrl}/Products`;

  constructor(private http: HttpClient) {
    this.httpHeader = {Headers:new HttpHeaders({'Content-Type':'application/json'})}
  }

  GetAllProducts():Observable<IProuduct[]> {
    return this.http.get<IProuduct[]>(`${this.url}`)
  }

  getProductsById(id:string): Observable<IProuduct>{
    return this.http.get<IProuduct>(`${this.url}/${id}`)
  }

  SearchOnProductsMaterial(material:string): Observable<IProuduct[]> {
    return this.http.get<IProuduct[]>(`${this.url}?Material=${material}`)

  }

  getProductsByCategoryId(id:number): Observable<IProuduct[]> {
    return this.http.get<IProuduct[]>(`${this.url}?categoryID=${id}`)
  }

  addNewProduct(product:IProuduct): Observable<IProuduct>{
    return this.http.post<IProuduct>(`${this.url}`,product,this.httpHeader) 
  }

  UpdateProduct(product:IProuduct): Observable<IProuduct>{    
    return this.http.put<IProuduct>(`${this.url}/${product.id}`,product,this.httpHeader) 
  }
 
  DeleteProduct(id:number): Observable<IProuduct>{
    return this.http.delete<IProuduct>(`${this.url}/${id}`)
  }
}
