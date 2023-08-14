import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent {

  name: string = '';
  constructor(
    private readonly route: ActivatedRoute
  ) {
    console.log('constructor called');

  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
    this.route.queryParams.subscribe((param) => {
      const { name } = param;
      this.name = name;  
    })
  }

}
