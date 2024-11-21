import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';
import { loggedInGuard } from '../shared/guards/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    component: LeaderboardPageComponent,
    canActivate: [loggedInGuard],
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaderboardRoutingModule {}
