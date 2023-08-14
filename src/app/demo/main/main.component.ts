import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  
})
export class MainComponent {

  public KirimkechildTitle: string = "child title";

  public clickCount: number = 0;

  public name: string = "main name";

  onCountChanged(count: any): void {
    this.clickCount = count;
  }
}