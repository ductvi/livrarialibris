import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ficcao } from './ficcao';

describe('Ficcao', () => {
  let component: Ficcao;
  let fixture: ComponentFixture<Ficcao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ficcao],
    }).compileComponents();

    fixture = TestBed.createComponent(Ficcao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
