import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendPostComponent } from './trend-post.component';

describe('TrendPostComponent', () => {
  let component: TrendPostComponent;
  let fixture: ComponentFixture<TrendPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
