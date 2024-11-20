import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationExpiredPageComponent } from './invitation-expired-page.component';

describe('InvitationExpiredPageComponent', () => {
  let component: InvitationExpiredPageComponent;
  let fixture: ComponentFixture<InvitationExpiredPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvitationExpiredPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitationExpiredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
