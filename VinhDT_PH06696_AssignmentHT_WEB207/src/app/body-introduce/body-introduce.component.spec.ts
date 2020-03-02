import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyIntroduceComponent } from './body-introduce.component';

describe('BodyIntroduceComponent', () => {
  let component: BodyIntroduceComponent;
  let fixture: ComponentFixture<BodyIntroduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyIntroduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
