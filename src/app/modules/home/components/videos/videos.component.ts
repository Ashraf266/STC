import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeDataService } from '../../services/home-data.service';
import { Subscription } from 'rxjs';


interface Video{
  title: string;
  urlToImage: string;
}


@Component({
  selector: 'home-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent implements OnInit, OnDestroy {
  videos: Video[] = [];
  serviceSub!: Subscription;
  constructor(private videosService: HomeDataService) {}

  ngOnInit(): void {
    this.serviceSub = this.videosService.getVideos().subscribe((data) => {
      this.videos = data.articles.splice(0,3);
      console.log(this.videos);
    });
  }

  ngOnDestroy(): void {
      this.serviceSub.unsubscribe();
  }
}
