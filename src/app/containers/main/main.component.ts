import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-container',
  template: `
    <div class="main-container">
      <app-bar></app-bar>
      <main class="main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
