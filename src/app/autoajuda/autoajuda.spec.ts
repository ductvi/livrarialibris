import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autoajuda } from './autoajuda';

describe('Autoajuda', () => {
  let component: Autoajuda;
  let fixture: ComponentFixture<Autoajuda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autoajuda],
    }).compileComponents();

    fixture = TestBed.createComponent(Autoajuda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
