import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Desenv } from './desenv';

describe('Desenv', () => {
  let component: Desenv;
  let fixture: ComponentFixture<Desenv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desenv],
    }).compileComponents();

    fixture = TestBed.createComponent(Desenv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
