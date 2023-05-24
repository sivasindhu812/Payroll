import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepwdComponent } from './employeepwd.component';

describe('EmployeepwdComponent', () => {
  let component: EmployeepwdComponent;
  let fixture: ComponentFixture<EmployeepwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeepwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeepwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
