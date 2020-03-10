import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNicaraguaComponent } from './page-nicaragua.component';

describe('PageNicaraguaComponent', () => {
  let component: PageNicaraguaComponent;
  let fixture: ComponentFixture<PageNicaraguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNicaraguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNicaraguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
