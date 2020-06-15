import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppNotFoundComponent } from './app-not-found.component';

@NgModule({
  declarations: [AppNotFoundComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AppNotFoundComponent }]),
  ],
})
export class AppNotFoundModule {}
