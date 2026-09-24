import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juvenil } from './juvenil';

describe('Juvenil', () => {
  let component: Juvenil;
  let fixture: ComponentFixture<Juvenil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Juvenil],
    }).compileComponents();

    fixture = TestBed.createComponent(Juvenil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
