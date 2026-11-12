import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Especial } from './especial';

describe('Especial', () => {
  let component: Especial;
  let fixture: ComponentFixture<Especial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Especial],
    }).compileComponents();

    fixture = TestBed.createComponent(Especial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
