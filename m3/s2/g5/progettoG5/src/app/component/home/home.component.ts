import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { iUser } from '../../../interface/user.interface';
import { TodosService} from '../../../service/todos.service';
import {iTodo} from '../../../interface/todos.interface'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
users: iUser[] = []
todos: iTodo[] = []

constructor(private UserSvc: UserService, private todosSvc:TodosService ){}

ngOnInit(){
  this.users = this.UserSvc.getAll(),
  this.todos = this.todosSvc.getAll()
}

}
