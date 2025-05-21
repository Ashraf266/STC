import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// Factory function for translation loader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RouterModule,
  ],
  providers: [],
})
export class CoreModule {}
