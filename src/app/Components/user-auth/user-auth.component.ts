import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.scss'
})
export class UserAuthComponent implements OnInit {
  userLoginForm: FormGroup
  userLog: boolean = true
  constructor(private userAuthService: UserAuthService,private fb:FormBuilder) {
    this.userLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  } 
  ngOnInit(): void {
    this.userLog = this.userAuthService.isUserLoggedIn;
  }

  login() {
    this.userAuthService.login(this.userLoginForm.value.email, this.userLoginForm.value.password);
    this.userLog = this.userAuthService.isUserLoggedIn;
  }
  logout() {
    this.userAuthService.logout();
    this.userLog = this.userAuthService.isUserLoggedIn;
  }

  get email() {
    return this.userLoginForm.get('email')
  }
  get password() {
    return this.userLoginForm.get('password')
  }
}
