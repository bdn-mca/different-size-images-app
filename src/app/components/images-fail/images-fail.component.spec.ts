import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesFailComponent } from './images-fail.component';

describe('ImagesFailComponent', () => {
  let component: ImagesFailComponent;
  let fixture: ComponentFixture<ImagesFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesFailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
