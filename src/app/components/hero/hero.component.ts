import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage, DecimalPipe } from '@angular/common';
import { App } from '../../app.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, DecimalPipe],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  // Inject parent root Component to access modal triggers
  private app = inject(App);
  private platformId = inject(PLATFORM_ID);

  // Animated counters driven by Signals (SSR-Safe)
  membersCount = signal<number>(0);
  coachesCount = signal<number>(0);
  hoursCount = signal<number>(0);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateCounters();
    }
  }

  private animateCounters() {
    const targetMembers = 5000;
    const targetCoaches = 20;
    const targetHours = 24;

    const duration = 1500; // 1.5s total animation time
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      // Linear interpolation to increment stats smoothly
      this.membersCount.set(Math.floor((targetMembers / steps) * currentStep));
      this.coachesCount.set(Math.floor((targetCoaches / steps) * currentStep));
      this.hoursCount.set(Math.floor((targetHours / steps) * currentStep));

      if (currentStep >= steps) {
        clearInterval(timer);
        // Force final target numbers
        this.membersCount.set(targetMembers);
        this.coachesCount.set(targetCoaches);
        this.hoursCount.set(targetHours);
      }
    }, stepTime);
  }

  openApplicationModal() {
    this.app.openModal();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
