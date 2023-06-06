import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpServiceService } from './http-service.service';

describe('HttpServiceService', () => {
  let service: HttpServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpServiceService],
    });
    service = TestBed.inject(HttpServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data from the API', () => {
    const testData = { id: 1, name: 'John Doe' };

    service.getAllCountries().subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne(
      'https://restcountries.com/v3.1/all'
    );
    expect(req.request.method).toBe('GET');

    req.flush(testData);
  });
});
