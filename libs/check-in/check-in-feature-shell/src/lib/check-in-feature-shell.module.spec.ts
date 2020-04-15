import { async, TestBed } from '@angular/core/testing';
import { CheckInFeatureShellModule } from './check-in-feature-shell.module';

describe('CheckInFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckInFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CheckInFeatureShellModule).toBeDefined();
  });
});
