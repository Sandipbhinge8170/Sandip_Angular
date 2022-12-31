import { TestBed, async, inject } from '@angular/core/testing';

import { AunsavedchangesGuard } from './aunsavedchanges.guard';

describe('AunsavedchangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AunsavedchangesGuard]
    });
  });

  it('should ...', inject([AunsavedchangesGuard], (guard: AunsavedchangesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
