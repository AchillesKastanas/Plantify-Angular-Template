/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessagingService } from './messaging.service';

describe('Service: Messaging', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagingService]
    });
  });

  it('should ...', inject([MessagingService], (service: MessagingService) => {
    expect(service).toBeTruthy();
  }));
});
