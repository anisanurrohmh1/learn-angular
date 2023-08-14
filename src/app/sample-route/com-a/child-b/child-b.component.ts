import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { OnInit } from "@angular/core";
import { Component } from '@angular/core';


@Component({
  templateUrl: './child-b.component.html',

})

export class ChildBComponent implements OnInit {

  childId: string = '';

  constructor(
    private readonly router: Router, // Untuk navigasi
    private readonly route: ActivatedRoute // untuk kebutuhan params
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.childId = params['id']
      }
    })
  }

  
}