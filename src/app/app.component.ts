import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsBarComponent } from './components/stats-bar/stats-bar.component';
import { FeaturesComponent } from './components/features/features.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FacilityComponent } from './components/facility/facility.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    StatsBarComponent,
    FeaturesComponent,
    EnrollmentComponent,
    PricingComponent,
    TestimonialsComponent,
    FacilityComponent,
    FaqComponent,
    CtaBannerComponent,
    FooterComponent,
    ModalComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App implements OnInit {
  private platformId = inject(PLATFORM_ID);

  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.updateSEO();
    if (isPlatformBrowser(this.platformId)) {
      // Fade out global loader from index.html
      setTimeout(() => {
        const loader = document.getElementById('global-loader');
        if (loader) {
          loader.style.opacity = '0';
          setTimeout(() => loader.remove(), 800); // Remove from DOM after fade out
        }
      }, 1000);

      this.initScrollReveal();
    }
  }

  private initScrollReveal() {
    import('motion').then(({ inView, animate }) => {
      setTimeout(() => {
        const revealSelectors = [
          'app-features .text-center',
          'app-features article',
          'app-enrollment .text-center',
          'app-enrollment article',
          'app-pricing .text-center',
          'app-pricing article',
          'app-faq .text-center',
          'app-faq .glass-card',
          'app-testimonials .text-center',
          'app-testimonials article',
          'app-testimonials div.glass-card',
          'app-facility .text-left',
          'app-facility article',
          'app-cta-banner .text-center',
        ];

        revealSelectors.forEach(sel => {
          document.querySelectorAll(sel).forEach((el: any) => {
            // Initial state
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';

            // Framer Motion vanilla scroll reveal
            inView(el, () => {
              animate(el, 
                { opacity: 1, transform: 'translateY(0px)' }, 
                { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
              );
            }, { amount: 0.05 });
          });
        });
      }, 500);
    });
  }

  private updateSEO() {
    this.titleService.setTitle('Titan Elite | Premium Fitness & High-Science Athletic Training');

    this.metaService.updateTag({
      name: 'description',
      content: 'Elevate your physical baseline at Titan Elite. Explore our ultra-premium training spaces, custom biomechanical profiling, cryotherapy recovery suites, and world-class master coaching.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'premium fitness, elite coaching, personal trainer, luxury gym, cryotherapy, sports biomechanics, bespoke nutrition, athletic training, elite recovery, high-performance training'
    });

    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    this.metaService.updateTag({ property: 'og:title', content: 'Titan Elite | Premium Fitness & High-Science Athletic Training' });
    this.metaService.updateTag({ property: 'og:description', content: 'Elevate your physical baseline at Titan Elite.' });
    this.metaService.updateTag({ property: 'og:image', content: '/images/hero-bg.png' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Titan Elite | Premium Fitness & High-Science Athletic Training' });
    this.metaService.updateTag({ name: 'twitter:image', content: '/images/hero-bg.png' });
  }
}
