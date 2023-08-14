import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  private titlee: string = ''

  
  
  @Input()
  public set title(title: string){
    this.titlee = title;
  }

  public get title() { 
    return this.titlee; 
  }

  public clickCount: number = 0;
  
  @Output() 
  onChanged = new EventEmitter<number>();
  
  countChange(count: number) {
    count++
    this.clickCount = count;
    this.onChanged.emit( this.clickCount );
  }
  
  @Input()
  public childName: string =""; //TwoWayBinding for main component

  @Output() 
  childNameChange = new EventEmitter<string>();

  nameChange(name: any){
    this.childNameChange.emit(name);
  }
}