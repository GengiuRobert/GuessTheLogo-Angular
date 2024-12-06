import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  constructor(private homeService: HomeService) {

  }

  onSubmit() {
    this.homeService.updateSettings(this.category(), this.difficulty());
  }

}
