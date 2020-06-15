import { Component } from '@angular/core';

@Component({
  template: `
    <div>
      <div>
        <a href="" routerLink="/">Home</a> -
        <a href="" routerLink="/projects">Projects</a> -
        <a href="" routerLink="/login">Login</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AdminUiLayoutComponent {}
