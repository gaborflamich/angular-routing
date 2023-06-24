import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  constructor(private router: Router) {}

  backHome() {
    this.router.navigate(['/home']);
  }
}
