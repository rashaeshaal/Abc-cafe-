import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcCafeComponent } from './abc-cafe.component';

describe('AbcCafeComponent', () => {
  let component: AbcCafeComponent;
  let fixture: ComponentFixture<AbcCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbcCafeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
