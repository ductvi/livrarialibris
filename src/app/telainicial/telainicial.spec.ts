import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telainicial } from './telainicial';

describe('Telainicial', () => {
  let component: Telainicial;
  let fixture: ComponentFixture<Telainicial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Telainicial],
    }).compileComponents();

    fixture = TestBed.createComponent(Telainicial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
