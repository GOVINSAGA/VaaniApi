import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Improve } from './improve';

describe('Improve', () => {
  let component: Improve;
  let fixture: ComponentFixture<Improve>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Improve]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Improve);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
