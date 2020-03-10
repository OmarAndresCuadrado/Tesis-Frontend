import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBoliviaComponent } from './page-bolivia.component';

describe('PageBoliviaComponent', () => {
  let component: PageBoliviaComponent;
  let fixture: ComponentFixture<PageBoliviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBoliviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBoliviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
