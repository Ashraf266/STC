import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/core/layout/layout.component';
import { loggedInGuard } from './modules/shared/guards/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [loggedInGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'leaderboard',
        loadChildren: () =>
          import('./modules/leaderboard/leaderboard.module').then(
            (m) => m.LeaderboardModule
          ),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
