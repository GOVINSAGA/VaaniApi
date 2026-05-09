import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ImproveComponent } from './improve';

describe('Improve', () => {
  let component: ImproveComponent;
  let fixture: ComponentFixture<ImproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImproveComponent],
      providers: [provideHttpClient(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
