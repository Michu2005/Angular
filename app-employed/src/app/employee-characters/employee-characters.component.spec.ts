import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCharactersComponent } from './employee-characters.component';

describe('EmployeeCharactersComponent', () => {
  let component: EmployeeCharactersComponent;
  let fixture: ComponentFixture<EmployeeCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCharactersComponent]
    });
    fixture = TestBed.createComponent(EmployeeCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
