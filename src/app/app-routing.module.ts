import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/core/layout/layout.component';
import { loggedInGuard } from './modules/core/guards/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate:[loggedInGuard],
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
