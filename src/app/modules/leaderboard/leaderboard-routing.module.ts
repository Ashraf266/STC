import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';
import { loggedInGuard } from '../shared/guards/logged-in.guard';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';
import { BadgePageComponent } from './pages/badge-page/badge-page.component';

const routes: Routes = [
  {
    path: '',
    component: LeaderboardPageComponent,
    canActivate: [loggedInGuard],
    children: [
      { path: 'activities', component: ActivitiesPageComponent },
      { path: 'badges', component: BadgePageComponent },
      { path: '', redirectTo: 'activities', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaderboardRoutingModule {}
