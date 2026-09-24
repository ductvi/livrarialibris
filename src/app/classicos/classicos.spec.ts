import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classicos } from './classicos';

describe('Classicos', () => {
  let component: Classicos;
  let fixture: ComponentFixture<Classicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Classicos],
    }).compileComponents();

    fixture = TestBed.createComponent(Classicos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
