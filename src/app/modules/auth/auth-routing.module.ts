import { InvitationPageComponent } from './pages/invitation-page/invitation-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationExpiredPageComponent } from './pages/invitation-expired-page/invitation-expired-page.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'invitation', component: InvitationPageComponent },
      {
        path: 'invitation-expired',
        component: InvitationExpiredPageComponent,
      },
      { path: 'terms', component: TermsPageComponent },
      { path: '', redirectTo: 'invitation', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
