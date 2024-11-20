import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { InputOtpModule } from 'primeng/inputotp';
import { CheckboxModule } from 'primeng/checkbox';

import { EmptyNavComponent } from './components/empty-nav/empty-nav.component';
import { InvitationPageComponent } from './pages/invitation-page/invitation-page.component';
import { InvitationExpiredPageComponent } from './pages/invitation-expired-page/invitation-expired-page.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    InvitationPageComponent,
    EmptyNavComponent,
    TermsPageComponent,
    InvitationExpiredPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CardModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    TranslateModule,
    InputOtpModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputTextareaModule,
  ],
})
export class AuthModule {}
