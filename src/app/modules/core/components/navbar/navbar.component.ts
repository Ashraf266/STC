import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(public translate: TranslateService) {
    if(!translate.currentLang)
      translate.currentLang = 'en';
  }

  changeLanguage() {
    if (this.translate.currentLang == 'en') this.translate.use('ar');
    else this.translate.use('en');
  }
}
