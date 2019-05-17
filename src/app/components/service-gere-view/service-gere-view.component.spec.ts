import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGereViewComponent } from './service-gere-view.component';

describe('ServiceGereViewComponent', () => {
  let component: ServiceGereViewComponent;
  let fixture: ComponentFixture<ServiceGereViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceGereViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceGereViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
