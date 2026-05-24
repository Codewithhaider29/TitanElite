import { Component, signal, inject, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { App } from '../../app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private app = inject(App);
  private platformId = inject(PLATFORM_ID);

  isMenuOpen = signal(false);
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 80);
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(state => !state);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
    }
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  openApplicationModal() {
    this.closeMenu();
    this.app.openModal();
  }

  scrollToSection(sectionId: string) {
    this.closeMenu();
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
