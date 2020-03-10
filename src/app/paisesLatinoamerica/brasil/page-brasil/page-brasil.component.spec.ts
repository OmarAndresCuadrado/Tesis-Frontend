import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBrasilComponent } from './page-brasil.component';

describe('PageBrasilComponent', () => {
  let component: PageBrasilComponent;
  let fixture: ComponentFixture<PageBrasilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBrasilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
