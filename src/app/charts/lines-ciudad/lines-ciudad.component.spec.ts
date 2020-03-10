import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesCiudadComponent } from './lines-ciudad.component';

describe('LinesCiudadComponent', () => {
  let component: LinesCiudadComponent;
  let fixture: ComponentFixture<LinesCiudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesCiudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
