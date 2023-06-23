import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHeader } from './header.definitions';
import { MockDataService } from 'src/app/services/mock-data.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mockData?: IHeader[];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.mockData = this.mockDataService.getMockData();
  }
}
