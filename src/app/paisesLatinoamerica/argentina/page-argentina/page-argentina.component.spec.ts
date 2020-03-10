import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArgentinaComponent } from './page-argentina.component';

describe('PageArgentinaComponent', () => {
  let component: PageArgentinaComponent;
  let fixture: ComponentFixture<PageArgentinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageArgentinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
