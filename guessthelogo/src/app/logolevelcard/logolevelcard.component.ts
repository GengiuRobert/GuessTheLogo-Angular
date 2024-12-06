import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ScoreboardComponent } from '../scoreboard/scoreboard.component';

import type { Logo } from '../../models/logo.model';

import { LogoService } from '../../services/logos.service';
import { AnswerService } from '../../services/answer.service';
import { ScoreService } from '../../services/score.service';


@Component({
  selector: 'app-logolevelcard',
  standalone: true,
  imports: [FormsModule, ScoreboardComponent],
  templateUrl: './logolevelcard.component.html',
  styleUrls: ['./logolevelcard.component.css']
})
export class LogolevelcardComponent implements OnInit {
  allLogos: Logo[] = [];
  currentLogo: Logo | null = null;
  srcOfRandomLogo = signal<string>('');
  isCorrectAnswer = signal<boolean | null>(null);
  isAllGuessed = signal<boolean>(false);
  currentMessage = signal<string>('');
  enteredLogoName = signal<string>('');

  constructor(
    private logoService: LogoService,
    private checkAnswearService: AnswerService,
    private scoreService: ScoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.allLogos = this.logoService.getAllLogos();
    this.loadNewLogo();
  }

  loadNewLogo(): void {

    this.currentLogo = this.logoService.getRandomLogo();

    if (this.currentLogo === null) {
      this.isAllGuessed.set(true);
      this.router.navigate(['/gamewon']);
      return;
    }
    
    this.srcOfRandomLogo.set(this.currentLogo.imageSrc);
    this.enteredLogoName.set('');
    this.isCorrectAnswer.set(null);
  }

  onCheckAnswer(): void {
    this.isCorrectAnswer.set(this.checkAnswearService.onInputCheckAnswer(this.enteredLogoName(), this.currentLogo!));
    if (this.isCorrectAnswer()) {
      this.logoService.removeGuessedLogo(this.currentLogo!);
      setTimeout(() => { this.scoreService.incrementScore(); this.loadNewLogo() }, 1000);
    }
  }

}