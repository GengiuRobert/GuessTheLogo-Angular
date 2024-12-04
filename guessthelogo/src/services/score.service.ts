import { Injectable } from "@angular/core";
import { signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ScoreService {
    private score = signal(0);

    getScore(): number {
        return this.score();
    }

    incrementScore(): void {
        this.score.set(this.score() + 1);
    }

    resetScore() : void{
         this.score.set(0);
    }
}