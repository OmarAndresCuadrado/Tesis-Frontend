import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHondurasComponent } from './page-honduras.component';

describe('PageHondurasComponent', () => {
  let component: PageHondurasComponent;
  let fixture: ComponentFixture<PageHondurasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHondurasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHondurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
