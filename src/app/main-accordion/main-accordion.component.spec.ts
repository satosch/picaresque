import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAccordionComponent } from './main-accordion.component';

describe('MainAccordionComponent', () => {
  let component: MainAccordionComponent;
  let fixture: ComponentFixture<MainAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
