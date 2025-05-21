import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeDataService } from '../../services/home-data.service';
import { Subscription } from 'rxjs';

interface Post {
  author: string;
  publishedAt: string;
}

@Component({
  selector: 'home-trends-page',
  templateUrl: './trends-page.component.html',
  styleUrl: './trends-page.component.scss',
})
export class TrendsPageComponent implements OnInit, OnDestroy {
  serviceSub!: Subscription;
  posts: Post[] = [];
  constructor(private postDataService: HomeDataService) {}

  ngOnInit(): void {
    this.serviceSub = this.postDataService.getUsers().subscribe((data) => {
      this.posts = data.articles.slice(0, 5);
      console.log(this.posts);
    });
  }

  ngOnDestroy(): void {
    this.serviceSub.unsubscribe();
  }
}
