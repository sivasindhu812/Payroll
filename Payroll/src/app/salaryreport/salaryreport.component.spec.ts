import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryreportComponent } from './salaryreport.component';

describe('SalaryreportComponent', () => {
  let component: SalaryreportComponent;
  let fixture: ComponentFixture<SalaryreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
