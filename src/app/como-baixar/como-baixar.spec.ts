import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComoBaixar } from './como-baixar';

describe('ComoBaixar', () => {
  let component: ComoBaixar;
  let fixture: ComponentFixture<ComoBaixar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoBaixar],
    }).compileComponents();

    fixture = TestBed.createComponent(ComoBaixar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
