import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UserData } from '../../interfaces/user-data';

@Component({
  selector: 'invitation-page',
  templateUrl: './invitation-page.component.html',
  styleUrl: './invitation-page.component.scss',
})
export class InvitationPageComponent implements OnInit {
  otpVisible: boolean = false;
  rejectVisible: boolean = false;
  serviceVisible: boolean = false;
  otpForm!: FormGroup;
  servicesForm!: FormGroup;
  rejectionForm!: FormGroup;
  user!: UserData;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.otpForm = new FormGroup({
      otp: new FormControl(''),
    });

    this.servicesForm = new FormGroup({
      services: new FormControl(['fixed']),
    });

    this.rejectionForm = new FormGroup({
      feedback: new FormControl(''),
    });

    this.getUserData();
  }

  getUserData(): void {
    this.user = {
      inviter: {
        name: 'Naser Mohamed A Almuhawwis',
        position: 'Solution and Technologies Section Manager',
      },
      userName: '',
      userMail: 'ree..........@stc.com.sa',
    };
  }

  sendFeedback(): void {
    console.log(this.rejectionForm.get('feedback')?.value);
  }

  sendServices(): void {
    console.log(this.servicesForm.get('services')?.value);
  }

  otpVerfication(): boolean {
    const otp = this.otpForm.get('otp');
    if (otp?.value === '1234') {
      return true;
    }
    return false;
  }

  showOTP(): void {
    this.otpVisible = true;
  }

  showReject(): void {
    this.rejectVisible = true;
  }

  showService(): void {
    this.otpVisible = false;
    this.serviceVisible = true;
  }
}
