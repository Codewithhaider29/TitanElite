import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../../app.component';

@Component({
  selector: 'app-facility',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facility.component.html',
})
export class FacilityComponent {
  private app = inject(App);

  openApplicationModal() {
    this.app.openModal();
  }
}
