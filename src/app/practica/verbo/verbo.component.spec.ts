import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerboComponent } from './verbo.component';

describe('VerboComponent', () => {
  let component: VerboComponent;
  let fixture: ComponentFixture<VerboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
