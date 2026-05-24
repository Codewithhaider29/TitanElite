import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqComponent } from './components/faq/faq.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FacilityComponent } from './components/facility/facility.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    EnrollmentComponent,
    PricingComponent,
    FaqComponent,
    TestimonialsComponent,
    FacilityComponent,
    FooterComponent,
    ModalComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App implements OnInit {
  private platformId = inject(PLATFORM_ID);

  // Global Signal for Membership Application Modal visibility
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
      this.initScrollReveal();
    }
  }

  private initScrollReveal() {
    // Custom High-Performance Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Unobserve to animate once and conserve performance
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    // Dynamically target major sections, program grids, membership plans, and success cards
    setTimeout(() => {
      const selectors = [
        '#hero text-center',
        'app-features h2',
        'app-features article',
        'app-enrollment h2',
        'app-enrollment article',
        'app-pricing h2',
        'app-pricing article',
        'app-faq h2',
        'app-faq .glass-card',
        'app-testimonials h2',
        'app-testimonials article',
        'app-facility h2',
        'app-facility .reveal-on-scroll'
      ];
      
      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach((el) => {
          el.classList.add('reveal-on-scroll');
          observer.observe(el);
        });
      });
    }, 150);
  }

  private updateSEO() {
    // Dynamic Page Title for premium brand SEO positioning
    this.titleService.setTitle('Titan Elite | Premium Fitness & High-Science Athletic Training');

    // Dynamic Meta Tags for search engine ranking
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Elevate your physical baseline at Titan Elite. Explore our ultra-premium training spaces, custom biomechanical profiling, cryotherapy recovery suites, and world-class master coaching.' 
    });

    this.metaService.updateTag({ 
      name: 'keywords', 
      content: 'premium fitness, elite coaching, personal trainer, luxury gym, cryotherapy, sports biomechanics, bespoke nutrition, athletic training, elite recovery, high-performance training' 
    });

    this.metaService.updateTag({ 
      name: 'robots', 
      content: 'index, follow' 
    });

    // OpenGraph Social Media integration
    this.metaService.updateTag({ 
      property: 'og:title', 
      content: 'Titan Elite | Premium Fitness & High-Science Athletic Training' 
    });

    this.metaService.updateTag({ 
      property: 'og:description', 
      content: 'Elevate your physical baseline at Titan Elite. Explore our ultra-premium training spaces, custom biomechanical profiling, cryotherapy recovery suites, and world-class master coaching.' 
    });

    this.metaService.updateTag({ 
      property: 'og:image', 
      content: '/images/hero-bg.png' 
    });

    this.metaService.updateTag({ 
      property: 'og:type', 
      content: 'website' 
    });

    // Twitter Card optimization
    this.metaService.updateTag({ 
      name: 'twitter:card', 
      content: 'summary_large_image' 
    });

    this.metaService.updateTag({ 
      name: 'twitter:title', 
      content: 'Titan Elite | Premium Fitness & High-Science Athletic Training' 
    });

    this.metaService.updateTag({ 
      name: 'twitter:description', 
      content: 'Elevate your physical baseline at Titan Elite. Explore our ultra-premium training spaces, custom biomechanical profiling, cryotherapy recovery suites, and world-class master coaching.' 
    });

    this.metaService.updateTag({ 
      name: 'twitter:image', 
      content: '/images/hero-bg.png' 
    });
  }
}

