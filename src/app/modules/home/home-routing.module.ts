import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TrendsPageComponent } from './pages/trends-page/trends-page.component';
import { FollowedTopicsPageComponent } from './pages/followed-topics-page/followed-topics-page.component';
import { LatestNewsPageComponent } from './pages/latest-news-page/latest-news-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: 'trends', component: TrendsPageComponent },
      { path: 'followed-topics', component: FollowedTopicsPageComponent },
      { path: 'latest-news', component: LatestNewsPageComponent },
      { path: '', redirectTo: 'trends', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
