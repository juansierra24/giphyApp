import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyLightboxComponent } from './giphy-lightbox.component';

describe('GiphyLightboxComponent', () => {
  let component: GiphyLightboxComponent;
  let fixture: ComponentFixture<GiphyLightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyLightboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
