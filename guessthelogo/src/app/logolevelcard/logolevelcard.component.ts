import { Component, OnInit, signal } from '@angular/core';
import { LogoService } from '../../services/logos.service';
import { AnswerService } from '../../services/answer.service';
import type { Logo } from '../../models/logo.model';
import { FormsModule } from '@angular/forms';
import { ScoreboardComponent } from "../scoreboard/scoreboard.component";
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-logolevelcard',
  standalone: true,
  imports: [FormsModule, ScoreboardComponent],
  templateUrl: './logolevelcard.component.html',
  styleUrls: ['./logolevelcard.component.css']
})
export class LogolevelcardComponent implements OnInit {

  srcOfRandomLogo: String | undefined;
  currentLogo: Logo | undefined;
  isCorrectAnswer = signal<boolean | null>(null);
  currentMessage = signal('');
  enteredLogoName = signal('');

  constructor(
    private logoService: LogoService,
    private checkAnswearService: AnswerService,
    private scoreService: ScoreService
  ) { }

  ngOnInit(): void {
    this.loadNewLogo();
  }

  loadNewLogo(): void {
    this.currentLogo = this.logoService.getRandomLogo();
    this.srcOfRandomLogo = this.currentLogo.imageSrc;
    this.enteredLogoName.set('');
  }

  onCheckAnswer(): void {
    this.isCorrectAnswer.set(this.checkAnswearService.onInputCheckAnswer(this.enteredLogoName(), this.currentLogo!));
    if (this.isCorrectAnswer()) {
      this.scoreService.incrementScore();
      this.loadNewLogo();
    }

  }




}
