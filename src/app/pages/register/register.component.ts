import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/User';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  authForm:FormGroup ={} as FormGroup;
  user:User ={} as User;
  constructor( private authService:AuthService,private router:Router,private fb:FormBuilder){
    this.authForm =this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]]
    })
  }
  ngOnInit(): void { }
  handleSubmit (){
    console.log(this.authForm.valid);
    if(this.authForm.valid){
      console.log(this.authForm.value);
      this.authService.register(this.authForm.value).subscribe({
        next:(data)=>{
          console.log('Them thanh cong',data);
          if(confirm('Them thanh cong')){
            this.router.navigate(['/login'])
          }
        },
        error:(err)=>{
          console.log('loi',err);;
         alert('Email đã tồn tại ')
        },
      })
    }else{
      console.log('form is not valid!');

      
    }
    
  }
}
