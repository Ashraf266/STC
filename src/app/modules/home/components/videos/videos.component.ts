import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../../services/home-data.service';


interface Video{
  title: string;
  urlToImage: string;
}


@Component({
  selector: 'home-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent implements OnInit {
  videos: Video[] = [];
  constructor(private videosService: HomeDataService) {}

  ngOnInit(): void {
    this.videosService.getVideos().subscribe((data) => {
      this.videos = data.articles.splice(0,3);
      console.log(this.videos);
    });
  }
}
