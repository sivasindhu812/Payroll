import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpwdComponent } from './adminpwd.component';

describe('AdminpwdComponent', () => {
  let component: AdminpwdComponent;
  let fixture: ComponentFixture<AdminpwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
