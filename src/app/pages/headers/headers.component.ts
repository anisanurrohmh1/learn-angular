import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})

export class HeadersComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  scrollToElement(element: string): void {
    document
      .querySelector(element)!
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
