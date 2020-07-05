import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProfileSectionComponent } from './navbar-profile-section.component';

describe('NavbarProfileSectionComponent', () => {
  let component: NavbarProfileSectionComponent;
  let fixture: ComponentFixture<NavbarProfileSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarProfileSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
