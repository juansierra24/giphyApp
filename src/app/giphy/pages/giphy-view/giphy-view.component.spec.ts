import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyViewComponent } from './giphy-view.component';

describe('GiphyViewComponent', () => {
  let component: GiphyViewComponent;
  let fixture: ComponentFixture<GiphyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
