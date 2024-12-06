import { Injectable } from "@angular/core";

import type { Setting } from "../models/setting.model";

@Injectable({ providedIn: 'root' })
export class HomeService {
    private settings: Setting = { category: "default", levelOfDifficulty: 1 }

    getSettings(): Setting {
        return this.settings;
    }

    updateSettings(newCategory: string, newLevelOfDiffiulty: number): void {
        this.settings.category = newCategory;
        this.settings.levelOfDifficulty = newLevelOfDiffiulty;
    }
}
