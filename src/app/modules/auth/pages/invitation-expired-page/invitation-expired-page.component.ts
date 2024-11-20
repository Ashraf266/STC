import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-invitation-expired-page',
  templateUrl: './invitation-expired-page.component.html',
  styleUrl: './invitation-expired-page.component.scss'
})
export class InvitationExpiredPageComponent {
  constructor(public translate: TranslateService){}

}
