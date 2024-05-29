import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/User';
import { AuthService } from '../../auth.service';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user:User = {} as User
  userForm:FormGroup ={} as FormGroup;
  constructor (private authService:AuthService, private router :Router,private fb:FormBuilder){
    this.userForm=this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    
    })
  }
ngOnInit(): void {
}
handleSubmit(){
  console.log(this.userForm.valid);
  if(this.userForm.valid){
    console.log(this.userForm.value);
    this.authService.login(this.userForm.value).subscribe({
      next:(data)=>{
        if(confirm('Đăng nhập thành công')){
          this.router.navigate(['/admin'])
        }
      },
      error:(err)=>{
        console.log('Đăng Nhập thất bại',err );
        alert(`Đăng nhập thất bại ,${err.error}`);
        
      }
    })
    
  }
  
}
}
