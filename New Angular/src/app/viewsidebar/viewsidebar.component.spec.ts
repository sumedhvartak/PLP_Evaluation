import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsidebarComponent } from './viewsidebar.component';

describe('ViewsidebarComponent', () => {
  let component: ViewsidebarComponent;
  let fixture: ComponentFixture<ViewsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
