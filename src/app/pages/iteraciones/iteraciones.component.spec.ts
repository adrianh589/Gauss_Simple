import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteracionesComponent } from './iteraciones.component';

describe('IteracionesComponent', () => {
  let component: IteracionesComponent;
  let fixture: ComponentFixture<IteracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
