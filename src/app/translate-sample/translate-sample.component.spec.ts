import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateSampleComponent } from './translate-sample.component';

describe('TranslateSampleComponent', () => {
  let component: TranslateSampleComponent;
  let fixture: ComponentFixture<TranslateSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
