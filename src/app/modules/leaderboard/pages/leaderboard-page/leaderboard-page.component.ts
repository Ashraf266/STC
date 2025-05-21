import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard-page.component.html',
  styleUrl: './leaderboard-page.component.scss',
})
export class LeaderboardPageComponent {
  constructor(public translate: TranslateService) {}
}
