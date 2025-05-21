import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'empty-nav',
  templateUrl: './empty-nav.component.html',
  styleUrl: './empty-nav.component.scss'
})
export class EmptyNavComponent {
  @Output() changeLanguageEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    if(!translate.currentLang)
      translate.currentLang = 'en';
  }
  
  changeLanguage(){
    if (this.translate.currentLang == 'en') this.translate.use('ar');
    else this.translate.use('en');
  }
}
