import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  private hasReloaded: boolean = false;
  private reloadDate: Date | null = null;

  constructor() { }

  reloadOnce(): void {
    if (!this.hasReloaded) {
      this.hasReloaded = true;
      this.reloadDate = new Date();
      window.location.reload();
    }
  }

  getReloadDate(): Date | null {
    return this.reloadDate;
  }
}
