import { Routes } from "@angular/router";
import { ComAComponent } from "./sample-route/com-a/com-a.component";
import { ComBComponent } from "./sample-route/com-b/com-b.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ChildAComponent } from "./sample-route/com-a/child-a/child-a.component";
import { ChildBComponent } from "./sample-route/com-a/child-b/child-b.component";
import { TodosComponent } from "./pages/todos/todos.component";

const routes: Routes = [
  {
    path: 'component-a',
    component: ComAComponent,
    children : [
      {
        path: 'child-a-a',
        component: ChildAComponent
      },
      {
        path: 'child-a-b/:id',
        component: ChildBComponent
      }
    ]
  },
  {
    path: 'component-b',
    component: ComBComponent
  },
  {
    path: 'todo',
    component: TodosComponent
  },
  {
    path: '',
    redirectTo: '/component-a',
    pathMatch: 'full'
  }

];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }