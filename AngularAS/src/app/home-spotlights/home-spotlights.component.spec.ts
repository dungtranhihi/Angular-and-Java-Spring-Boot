import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpotlightsComponent } from './home-spotlights.component';

describe('HomeSpotlightsComponent', () => {
  let component: HomeSpotlightsComponent;
  let fixture: ComponentFixture<HomeSpotlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSpotlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSpotlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
