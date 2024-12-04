import { Component, OnInit } from '@angular/core';
import { LogoService } from '../../services/logos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logolevelcard',
  imports: [CommonModule],
  templateUrl: './logolevelcard.component.html',
  styleUrl: './logolevelcard.component.css'
})
export class LogolevelcardComponent implements OnInit {

  srcOfRandomLogo: String | undefined;

  constructor(private logoService: LogoService) { }

  ngOnInit(): void {
    let randomLogo = this.logoService.getRandomLogo();
    this.srcOfRandomLogo = randomLogo.imageSrc;
  }


}
