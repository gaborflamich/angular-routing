import { Injectable } from '@angular/core';
import { MockHeader } from '../components/header/header.mock';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  constructor() {}

  getMockData() {
    return MockHeader;
  }
}
