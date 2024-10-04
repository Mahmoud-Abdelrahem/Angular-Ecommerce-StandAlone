import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userURl:string= 
  constructor(private http: HttpClient) { 

  }

  addNewUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>("http://localhost:3000/Users", user)
  }
}
