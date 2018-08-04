import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagejsonComponent } from './pagejson.component';

describe('PagejsonComponent', () => {
  let component: PagejsonComponent;
  let fixture: ComponentFixture<PagejsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagejsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagejsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
