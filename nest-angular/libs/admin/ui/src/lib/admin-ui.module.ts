import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiLayoutComponent } from './admin-ui-layout.component';

@NgModule({
  declarations: [AdminUiLayoutComponent],
  exports: [AdminUiLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class AdminUiModule {}
