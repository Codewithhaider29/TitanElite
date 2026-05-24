import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../../app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  // Inject Parent Root Component to access modal Signal triggers
  private app = inject(App);

  // Signal to control mobile menu open state
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(state => !state);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  openApplicationModal() {
    this.closeMenu();
    this.app.openModal();
  }

  scrollToSection(sectionId: string) {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
