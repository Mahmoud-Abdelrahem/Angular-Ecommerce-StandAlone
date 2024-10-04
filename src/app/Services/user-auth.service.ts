import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  url:string = `${environment.baseUrl}/Users`;


  userLog:BehaviorSubject<boolean>
  constructor(private http: HttpClient) {
    this.userLog=new BehaviorSubject<boolean>(this.isUserLoggedIn)
   }


  login(email: string, password: string) {
    
    localStorage.setItem('userToken', '2345678912345');
    this.userLog.next(true)
  }
  logout() {
    localStorage.removeItem('userToken');
    this.userLog.next(false)
  }

  get isUserLoggedIn(): boolean {
    return localStorage.getItem('userToken') ? true : false;
  }

  getstatus(){
   return this.userLog.asObservable();
  }

  addNewUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.url}`, user)
  }
}
