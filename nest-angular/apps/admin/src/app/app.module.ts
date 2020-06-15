import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminUiLayoutComponent } from '@sandbox/admin/ui';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AdminUiLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        // In a larger app you would probably have a separate lib for your homepage
        loadChildren: () =>
          import('./pages/home/app-home.module').then((m) => m.AppHomeModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('@sandbox/admin/project').then((m) => m.AdminProjectModule),
      },
      {
        path: '**',
        loadChildren: () =>
          import('./pages/not-found/app-not-found.module').then(
            (m) => m.AppNotFoundModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([...routes], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
