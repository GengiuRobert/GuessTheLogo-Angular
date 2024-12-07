import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public difficulty = signal<number>(1);
  public category = signal<string>('default');

  constructor(private homeService: HomeService, private router: Router) {
  }

  onSubmit() {
    this.homeService.updateSettings(this.category(), Number(this.difficulty()));
    this.router.navigate(['/logolevel']);
  }

}
