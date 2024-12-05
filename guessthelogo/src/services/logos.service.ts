import type { Logo } from "../models/logo.model";
import { logos } from "../assets/logos";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LogoService {

    private logosImported: Logo[] = [...logos];

    getAllLogos(): Logo[] {
        return this.logosImported;
    }

    getRandomLogo(): Logo | null {

        if (this.logosImported.length === 0) {
            return null;
        }

        let generateRandomIndex = Math.floor(Math.random() * this.logosImported.length);
        return this.logosImported[generateRandomIndex];
    }

    removeGuessedLogo(currentLogo: Logo) {
        this.logosImported = this.logosImported.filter((logoFromArray) => logoFromArray.imageSrc !== currentLogo.imageSrc);
    }

}