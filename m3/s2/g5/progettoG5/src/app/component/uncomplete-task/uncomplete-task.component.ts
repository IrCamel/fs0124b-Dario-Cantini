import { Component } from '@angular/core';
import { iTodo } from '../../../interface/todos.interface';
import { iUser } from '../../../interface/user.interface';
import { TodosService } from '../../../service/todos.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-uncomplete-task',
  templateUrl: './uncomplete-task.component.html',
  styleUrl: './uncomplete-task.component.scss'
})
export class UncompleteTaskComponent {
  users: iUser[] = []
todos: iTodo[] = []

constructor(private UserSvc: UserService, private todosSvc:TodosService ){}

ngOnInit(){
  this.users = this.UserSvc.getAll(),
  this.todos = this.todosSvc.getUnCompleteTask()
}

}
