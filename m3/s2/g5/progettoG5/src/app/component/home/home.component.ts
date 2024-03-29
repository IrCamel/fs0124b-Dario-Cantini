import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { iUser } from '../../../interface/user.interface';
import { TodosService } from '../../../service/todos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
users: iUser[] = []

constructor(private UserSvc: UserService){}

ngOnInit(){
  this.users = this.UserSvc.getAll()
}

}
