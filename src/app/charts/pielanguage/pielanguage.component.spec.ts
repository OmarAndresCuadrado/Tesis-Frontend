import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PielanguageComponent } from './pielanguage.component';

describe('PielanguageComponent', () => {
  let component: PielanguageComponent;
  let fixture: ComponentFixture<PielanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PielanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PielanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
