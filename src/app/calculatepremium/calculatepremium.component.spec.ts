import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatepremiumComponent } from './calculatepremium.component';

describe('CalculatepremiumComponent', () => {
  let component: CalculatepremiumComponent;
  let fixture: ComponentFixture<CalculatepremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatepremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatepremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
