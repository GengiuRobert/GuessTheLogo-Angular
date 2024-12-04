import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-scoreboard',
  imports: [],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent implements OnInit{

  currentScore: number = 0;

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.currentScore = this.scoreService.getScore();
  }

  ngDoCheck(): void{
    this.currentScore = this.scoreService.getScore();
  }
}
