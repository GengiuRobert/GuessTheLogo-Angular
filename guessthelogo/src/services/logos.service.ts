import type { Logo } from "../models/logo.model";
import { logos } from "../assets/logos";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LogoService {

    private logosImported: Logo[] = [...logos];

    getAllLogos(): Logo[] {
        return this.logosImported;
    }

    setAllLogos(newLogos: Logo[]): void {
        this.logosImported = newLogos;
    }

    getFilteredLogos(category: string, levelOfDifficulty: number): Logo[] {

        let filteredLogos = this.logosImported;

        filteredLogos = filteredLogos.filter((logo) => {
            const matchesDifficulty = logo.difficultyLevel === levelOfDifficulty;
            const matchesCategory = category === "default" || logo.category === category;

            return (matchesCategory && matchesDifficulty);
        });

        return filteredLogos;
    }

    getRandomLogo(): Logo | null {

        if (this.logosImported.length === 0) {
            return null;
        } else {
            let generateRandomIndex = Math.floor(Math.random() * this.logosImported.length);
            return this.logosImported[generateRandomIndex];
        }

    }

    removeGuessedLogo(currentLogo: Logo) {
        this.logosImported = this.logosImported.filter((logoFromArray) => logoFromArray.imageSrc !== currentLogo.imageSrc);
    }

}