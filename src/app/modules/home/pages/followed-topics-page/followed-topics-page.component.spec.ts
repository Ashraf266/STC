import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedTopicsPageComponent } from './followed-topics-page.component';

describe('FollowedTopicsPageComponent', () => {
  let component: FollowedTopicsPageComponent;
  let fixture: ComponentFixture<FollowedTopicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowedTopicsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowedTopicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
