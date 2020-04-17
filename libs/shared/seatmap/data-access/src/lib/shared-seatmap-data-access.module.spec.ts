import { async, TestBed } from '@angular/core/testing';
import { SharedSeatmapDataAccessModule } from './shared-seatmap-data-access.module';

describe('SharedSeatmapDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedSeatmapDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedSeatmapDataAccessModule).toBeDefined();
  });
});
