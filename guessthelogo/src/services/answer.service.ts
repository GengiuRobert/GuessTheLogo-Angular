import type { Logo } from "../models/logo.model";
import { logos } from "../assets/logos";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AnswerService {

    importedLogos = logos;

    onInputCheckAnswer(userInputLogo: string, currentLogo: Logo ): boolean {
        let processedLogoName = userInputLogo.toLowerCase().trim();
        let currentLogoName = currentLogo.name.toLowerCase();
        if (processedLogoName === currentLogoName) {
            return true;
        }
        return false;
    }
}