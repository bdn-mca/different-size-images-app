import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesWideComponent } from './images-wide.component';

describe('ImagesWideComponent', () => {
  let component: ImagesWideComponent;
  let fixture: ComponentFixture<ImagesWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesWideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
