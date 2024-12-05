import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-trend-post',
  templateUrl: './trend-post.component.html',
  styleUrl: './trend-post.component.scss',
})
export class TrendPostComponent {
  @Input() username: string = '';
  @Input() postDate: string = '';
}
