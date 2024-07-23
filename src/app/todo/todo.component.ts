import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  catId: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    let todo= {
      todo:f.value.todoText,
      isComplete:false
    }
    this.todoService.saveTodo(this.catId, todo)
  }

}
