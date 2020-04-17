import { async, TestBed } from '@angular/core/testing';
import { BookingDataAccessModule } from './booking-data-access.module';

describe('BookingDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingDataAccessModule).toBeDefined();
  });
});
