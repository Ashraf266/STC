import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'invitation-page',
  templateUrl: './invitation-page.component.html',
  styleUrl: './invitation-page.component.scss',
})
export class InvitationPageComponent implements OnInit {
  otpVisible: boolean = false;
  rejectVisible: boolean = false;
  serviceVisible: boolean = false;
  value: string = '';
  otpForm!: FormGroup;
  servicesForm!: FormGroup;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.otpForm = new FormGroup({
      otp: new FormControl(''),
    });

    // this.otpForm
    //   .get('otp')
    //   ?.valueChanges.subscribe((value) => console.log(value));

    this.servicesForm = new FormGroup({
      services: new FormControl(null),
    });

    // this.servicesForm.valueChanges.subscribe((value) => console.log(value));
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
