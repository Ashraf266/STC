import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';



@NgModule({
  declarations: [
    LeaderboardPageComponent
  ],
  imports: [
    CommonModule,
    LeaderboardRoutingModule
  ]
})
export class LeaderboardModule { }
