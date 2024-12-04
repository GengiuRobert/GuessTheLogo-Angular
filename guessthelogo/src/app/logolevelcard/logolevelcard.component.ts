import { Component, OnInit, signal } from '@angular/core';
import { LogoService } from '../../services/logos.service';
import { AnswerService } from '../../services/answer.service';
import type { Logo } from '../../models/logo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logolevelcard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logolevelcard.component.html',
  styleUrls: ['./logolevelcard.component.css']
})
export class LogolevelcardComponent implements OnInit {

  srcOfRandomLogo: String | undefined;
  currentLogo: Logo | undefined;
  enteredLogoName = signal('');

  constructor(
    private logoService: LogoService,
    private checkAnswearService: AnswerService
  ) { }

  ngOnInit(): void {
    this.currentLogo = this.logoService.getRandomLogo();
    this.srcOfRandomLogo = this.currentLogo.imageSrc;
  }

  loadNewLogo(): void {
    this.currentLogo = this.logoService.getRandomLogo();
    this.srcOfRandomLogo = this.currentLogo.imageSrc;
    this.enteredLogoName.set('');
  }

  onCheckAnswer(): void {
    let isCorrectAnswer = this.checkAnswearService.onInputCheckAnswer(this.enteredLogoName(), this.currentLogo!);
    if (isCorrectAnswer) {
      console.log("Correct");
      this.loadNewLogo();
    }
    else {
      console.log("Wrong");
    }
  }




}
