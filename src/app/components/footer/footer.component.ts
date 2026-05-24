import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  subscribeEmail(email: string, event: Event) {
    event.preventDefault();
    if (email && email.trim() !== '') {
      alert(`Access Granted: ${email.trim()} added to the Titan Elite whitelist.`);
    }
  }

  downloadBlueprint(event: Event) {
    event.preventDefault();
    alert('Access Granted: Your Premium Performance Blueprint PDF download has commenced.');
  }

  triggerLegal(doc: string) {
    alert(`Sanctuary Security Protocol: ${doc} agreements are strictly encrypted and maintained under high-profile protection boundaries.`);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
