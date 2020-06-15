import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminDataModule } from '@sandbox/admin/data';
import { AdminProjectIndexComponent } from './admin-project-index.component';
import { AdminProjectService } from './admin-project.service';

@NgModule({
  declarations: [AdminProjectIndexComponent],
  imports: [
    CommonModule,
    AdminDataModule,
    RouterModule.forChild([
      //
      { path: '', component: AdminProjectIndexComponent },
    ]),
  ],
  providers: [AdminProjectService],
})
export class AdminProjectModule {}
