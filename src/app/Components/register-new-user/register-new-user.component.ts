import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../../Models/iuser';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-register-new-user',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register-new-user.component.html',
  styleUrl: './register-new-user.component.scss'
})
export class RegisterNewUserComponent {

  userForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder,private router:Router,private HttpClient: HttpClient,private usersService: UserAuthService) {
    this.userForm = this.fb.group({
      FullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      anotherPhone: this.fb.array([]),
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get FullName() {
    return this.userForm.get('FullName')
  }
  get email() {
    return this.userForm.get('email')
  }
  get phone() {
    return this.userForm.get('phone')
  }
  get password() {
    return this.userForm.get('password')
  }

  get anotherPhone():FormArray {
    return this.userForm.get('anotherPhone') as FormArray
  }

  NewPhone() {
    return this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('[0-9]{11}')]]
    })
  }
  AddNewPhone() {
    this.anotherPhone.push(this.NewPhone())
  }
  DeletePhone(index: number) {
    this.anotherPhone.removeAt(index)
  }

  AddNewUser(user: IUser) {
    this.usersService.addNewUser(user).subscribe({
      next: () => {
        console.log(user)
        this.router.navigate(['/UserLogin'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
