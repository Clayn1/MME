import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPreviewsComponent } from './mod-previews.component';

describe('ModPreviewsComponent', () => {
  let component: ModPreviewsComponent;
  let fixture: ComponentFixture<ModPreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModPreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
