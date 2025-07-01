import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Victor } from './victor';

describe('Victor', () => {
  let component: Victor;
  let fixture: ComponentFixture<Victor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Victor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Victor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
