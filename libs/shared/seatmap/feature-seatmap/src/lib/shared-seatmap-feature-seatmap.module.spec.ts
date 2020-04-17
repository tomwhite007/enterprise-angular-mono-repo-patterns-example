import { async, TestBed } from '@angular/core/testing';
import { SharedSeatmapFeatureSeatmapModule } from './shared-seatmap-feature-seatmap.module';

describe('SharedSeatmapFeatureSeatmapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedSeatmapFeatureSeatmapModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedSeatmapFeatureSeatmapModule).toBeDefined();
  });
});
