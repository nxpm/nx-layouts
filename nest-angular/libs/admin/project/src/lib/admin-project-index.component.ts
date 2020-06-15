import { Component } from '@angular/core';
import { AdminDataService } from '@sandbox/admin/data';

@Component({
  template: `
    <div class="text-center">
      <h2>Projects</h2>
      <ng-container *ngFor="let item of items">
        {{ item.name }}
      </ng-container>
    </div>
  `,
})
export class AdminProjectIndexComponent {
  public items: any[];

  constructor(private readonly data: AdminDataService) {
    this.items = this.data.projectFindAll();
  }
}
