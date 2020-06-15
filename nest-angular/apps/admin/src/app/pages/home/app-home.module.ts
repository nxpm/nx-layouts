import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home.component';

@NgModule({
  declarations: [AppHomeComponent],
  imports: [RouterModule.forChild([{ path: '', component: AppHomeComponent }])],
})
export class AppHomeModule {}
