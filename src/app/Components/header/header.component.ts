import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  userLog: boolean = true
  constructor(private userAuthService: UserAuthService) { }
  ngOnInit(): void {
     this.userAuthService.getstatus().subscribe({
       next:(data) => {
         this.userLog = data
       },
       error:(err) => {
         console.log(err)
       }
     })
  }

  login() {
    this.userAuthService.login('a@a.com', '123456');
    this.userLog = this.userAuthService.isUserLoggedIn;
  }
  logout() {
    this.userAuthService.logout();
    this.userLog = this.userAuthService.isUserLoggedIn;
  }
  


}
