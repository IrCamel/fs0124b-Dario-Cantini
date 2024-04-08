import { Component } from '@angular/core';
import { AuthService } from '../../module/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  isUserLoggedId:boolean = false

  constructor(private authSvc:AuthService){}

  ngOnInit(){
    this.authSvc.isLoggedIn$
    .subscribe(data => {
      this.isUserLoggedId = data
    })
  }

}
