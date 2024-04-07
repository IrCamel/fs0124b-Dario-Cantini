import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../../models/i-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  registerData: Partial<IUser> = {}

  constructor(private authSvc: AuthService, private router:Router){}

  signUp(){
    this.authSvc.register(this.registerData)
    .subscribe( data => {
      this.router.navigate(['/dashboard'])
    })
  }

}