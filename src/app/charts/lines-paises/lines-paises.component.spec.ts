import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesPaisesComponent } from './lines-paises.component';

describe('LinesPaisesComponent', () => {
  let component: LinesPaisesComponent;
  let fixture: ComponentFixture<LinesPaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
