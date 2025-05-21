import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { VideosComponent } from './components/videos/videos.component';
import { SharedModule } from '../shared/shared.module';
import { TrendsPageComponent } from './pages/trends-page/trends-page.component';
import { FollowedTopicsPageComponent } from './pages/followed-topics-page/followed-topics-page.component';
import { LatestNewsPageComponent } from './pages/latest-news-page/latest-news-page.component';
import { TrendPostComponent } from './components/trend-post/trend-post.component';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [HomePageComponent, VideosComponent, TrendsPageComponent, FollowedTopicsPageComponent, LatestNewsPageComponent, TrendPostComponent, QuestionsComponent],
  imports: [CommonModule, HomeRoutingModule, ButtonModule, TranslateModule, SharedModule],
})
export class HomeModule {}
