import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsalaryComponent } from './gsalary.component';

describe('GsalaryComponent', () => {
  let component: GsalaryComponent;
  let fixture: ComponentFixture<GsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
