// import { Injectable } from '@angular/core';
// // import { SessionService } from 'src/app/shared/services/session.service';
// // import { Todo } from '../model/todo.model';

// const TODO_KEY = 'todos'

// @Injectable({
//   providedIn: 'root'
// })
// export class TodosService {
//   todos: Todo[] = [];
//   constructor(
//     private readonly sessionService: SessionService
//   ) { }

//   list(): Todo[] {
//     const todoValue: string = this.sessionService.get(TODO_KEY);
//     try {
//       const todos: Todo[] = todoValue ? JSON.parse(todoValue) : [
//         {
//           id: 1,
//           name: 'Makan',
//           isDone: false
//         }];
//       this.todos = todos;
//       this.updateSessionStorage();
//       return todos;
//     } catch (err: any) {
//       return err.message;
//     }
//   }

//   checked(todo: Todo): void {
//     try {
//       this.todos.forEach((item) => {
//         if (item.id === todo.id) item.isDone = !item.isDone;
//         this.updateSessionStorage();
//       })
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   remove(id: number): void {
//     try {
//       const todoId: number = this.todos.findIndex(item => item.id == id);
//       this.todos.splice(todoId, 1);
//       this.updateSessionStorage();
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   get(id: number): Todo {
//     try {
//       return this.todos.find(item => item.id === id) as Todo
//     } catch (error: any) {
//       return error.message;
//     }
//   }

//   save(todo: Todo): void {
//     try {
//       if (!todo.id) {
//         todo.id = this.todos.length < 1 ? 1 : this.todos[this.todos.length - 1].id + 1;
//         this.todos.push(todo);
//       } else {
//         this.todos.forEach((item, index) => {
//           if (item.id === todo.id) {
//             this.todos.splice(index, 1, todo)
//           }
//         })
//       }
//       this.updateSessionStorage();
//     } catch (error) {
//       console.error(error);
//     }
//   }


//   private updateSessionStorage(): void {
//     this.sessionService.set(TODO_KEY, JSON.stringify(this.todos))
//   }
// }