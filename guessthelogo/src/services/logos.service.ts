import type { Logo } from "../models/logo.model";
import { logos } from "../assets/logos";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LogoService {

    logosImported = logos;

    getRandomLogo(): Logo {
        let generateRandomIndex = Math.floor(Math.random() * this.logosImported.length);
        return this.logosImported[generateRandomIndex];
    }

}