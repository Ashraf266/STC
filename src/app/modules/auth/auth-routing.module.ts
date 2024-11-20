import { InvitationPageComponent } from './pages/invitation-page/invitation-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationExpiredPageComponent } from './pages/invitation-expired-page/invitation-expired-page.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';

const routes: Routes = [
  {path: 'invitation', component: InvitationPageComponent},
  {path: 'invitation-expired', component: InvitationExpiredPageComponent},
  {path: 'terms', component: TermsPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
