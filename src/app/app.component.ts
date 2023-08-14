import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app'; 
  data = 0;

  changeFromParent(): void {
    this.data += 1;
  }

  addData(newData: number){
    this.data = newData;
  }
}

