import { Component } from '@angular/core';
import { iUser } from '../../../interface/user.interface';
import { iTodo } from '../../../interface/todos.interface';
import { TodosService } from '../../../service/todos.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrl: './complete-task.component.scss'
})
export class CompleteTaskComponent {


users: iUser[] = []
todos: iTodo[] = []

constructor(private UserSvc: UserService, private todosSvc:TodosService ){}

ngOnInit(){
  this.users = this.UserSvc.getAll(),
  this.todos = this.todosSvc.getCompleteTask()
}


}
