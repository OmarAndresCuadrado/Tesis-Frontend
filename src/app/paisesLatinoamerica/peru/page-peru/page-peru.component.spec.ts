import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePeruComponent } from './page-peru.component';

describe('PagePeruComponent', () => {
  let component: PagePeruComponent;
  let fixture: ComponentFixture<PagePeruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePeruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
