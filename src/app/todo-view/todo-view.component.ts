import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})

export class TodoViewComponent {
  @Input() username:string = ''
  @Output() eventIsLogin = new EventEmitter<boolean>()

  logout(){
    this.eventIsLogin.emit(false)
  }

  myTodo: Todo[] = [
    // {
    //   title: "Belajar",
    //   description: "Belajar Angular",
    //   isDone: true
    // }
  ]
  title: string = ''
  description: string = ''
  isAddDisable:boolean = false

  titleHandler(event: any) {
    this.title = event.target.value
    this.isAddDisable = !!(this.title && this.description);
  }

  descriptionHandler(event: any) {
    this.description = event.target.value
    this.isAddDisable = !!(this.title && this.description);
  }

  onSubmit() {
    if (this.title && this.description) {
      this.myTodo.push({title: this.title, description: this.description, isDone: true})
      this.description = ''
      this.title = ''
    }
  }

  onDelete(index: number) {
    this.myTodo.splice(index, 1)
  }

  onDone(index: number) {
    this.myTodo[index].isDone = !this.myTodo[index].isDone
  }
}

interface Todo {
  title: string;
  description: string;
  isDone: boolean;
}
