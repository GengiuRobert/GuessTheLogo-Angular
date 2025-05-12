import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  public difficulty = signal<number>(1);
  public category = signal<string>('default');
  public isOnline = signal<boolean>(navigator.onLine);

  constructor(private homeService: HomeService, private router: Router) {
    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }

  ngOnInit() {
    this.updateOnlineStatus();
  }

  ngOnDestroy() {
    window.removeEventListener('online', this.updateOnlineStatus.bind(this));
    window.removeEventListener('offline', this.updateOnlineStatus.bind(this));
  }

  private updateOnlineStatus() {
    this.isOnline.set(navigator.onLine);
  }

  onSubmit() {
    this.homeService.updateSettings(this.category(), Number(this.difficulty()));
    this.router.navigate(['/logolevel']);
  }
}
