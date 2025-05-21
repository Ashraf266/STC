import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-page',
  templateUrl: './badge-page.component.html',
  styleUrl: './badge-page.component.scss',
})
export class BadgePageComponent {
  badges: any[] = [
    {
      name: 'Beginner User',
      details: 'Points, Qitaf points, Badge, Leaderboard',
      points: '0 to 99 pts',
      extra: 'Earned badge',
      extraColor: 'bg-light-green',
      img: '/assets/images/achievement.svg',
    },
    {
      name: 'Advanced User',
      details:
        'Points, Badge, Leaderboard, Qitaf points, Certificate of Achievement',
      points: '1,000 - 4,999 pts',
      extra: 'Coming badge',
      extraColor: 'bg-orange',
      img: '/assets/images/medal.svg',
    },
    {
      name: 'Influncer',
      details:
        'Points, Badge,Leaderboard, Qitaf Points,Certificate of Achievement, Easter Eggs, Service Discounts',
      points: '5,000 - 9,999 pts',
      extra: '',
      img: '/assets/images/cup.svg',
    },
    {
      name: 'Tafani User',
      details:
        'Points, Badge,Leaderboard, Qitaf Points,Certificate of Achievement, Easter Eggs, Service Discounts, Leadership kudos',
      points: '10,000+ pts',
      extra: '',
      img: '/assets/images/award.svg',
    },
  ];
}
