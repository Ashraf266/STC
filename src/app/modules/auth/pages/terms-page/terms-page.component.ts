import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrl: './terms-page.component.scss',
})
export class TermsPageComponent {
  constructor(public translate: TranslateService, private router: Router) {}

  logIn(): void{
    localStorage.setItem('login-state', '1');
  }
}
