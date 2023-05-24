import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleavereportComponent } from './empleavereport.component';

describe('EmpleavereportComponent', () => {
  let component: EmpleavereportComponent;
  let fixture: ComponentFixture<EmpleavereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleavereportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleavereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
