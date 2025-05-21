import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  constructor(public translate: TranslateService) {
    // Set default language
    translate.setDefaultLang('en');
  }
}
