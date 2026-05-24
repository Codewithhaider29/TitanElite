import { Component, inject } from '@angular/core';
import { App } from '../../app.component';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  templateUrl: './cta-banner.component.html',
})
export class CtaBannerComponent {
  private app = inject(App);

  openApplicationModal() {
    this.app.openModal();
  }
}
