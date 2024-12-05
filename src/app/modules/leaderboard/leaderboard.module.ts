import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';
import { BadgePageComponent } from './pages/badge-page/badge-page.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    LeaderboardPageComponent,
    ActivitiesPageComponent,
    BadgePageComponent
  ],
  imports: [
    CommonModule,
    LeaderboardRoutingModule,
    TranslateModule,
    ButtonModule,
    TableModule
  ]
})
export class LeaderboardModule { }
