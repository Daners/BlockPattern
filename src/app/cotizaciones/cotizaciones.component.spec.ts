
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionesComponent } from './cotizaciones.component';

describe('CotizacionesComponent', () => {
  let component: CotizacionesComponent;
  let fixture: ComponentFixture<CotizacionesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
