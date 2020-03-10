import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUruguayComponent } from './page-uruguay.component';

describe('PageUruguayComponent', () => {
  let component: PageUruguayComponent;
  let fixture: ComponentFixture<PageUruguayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUruguayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUruguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
