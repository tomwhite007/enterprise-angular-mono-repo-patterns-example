import { async, TestBed } from '@angular/core/testing';
import { SharedSeatmapFeatureSeatListingModule } from './shared-seatmap-feature-seat-listing.module';

describe('SharedSeatmapFeatureSeatListingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedSeatmapFeatureSeatListingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedSeatmapFeatureSeatListingModule).toBeDefined();
  });
});
