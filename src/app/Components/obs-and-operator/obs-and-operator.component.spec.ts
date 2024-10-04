import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsAndOperatorComponent } from './obs-and-operator.component';

describe('ObsAndOperatorComponent', () => {
  let component: ObsAndOperatorComponent;
  let fixture: ComponentFixture<ObsAndOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsAndOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsAndOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
