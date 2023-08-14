import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComAComponent } from './com-a/com-a.component';
import { ComBComponent } from './com-b/com-b.component';
import { RouterModule } from '@angular/router';
import { ChildAComponent } from './com-a/child-a/child-a.component';
import { ChildBComponent } from './com-a/child-b/child-b.component';



@NgModule({
  declarations: [
    ComAComponent,
    ComBComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    ComAComponent,
    ComBComponent
  ]
})
export class SampleRouteModule { }
