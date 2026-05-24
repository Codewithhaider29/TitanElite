import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../../app.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  // Inject parent root Component to trigger membership overlay modal
  private app = inject(App);

  // Signals state management for billing cycle toggling
  billingCycle = signal<'monthly' | 'yearly'>('monthly');

  openApplicationModal() {
    this.app.openModal();
  }

  setBillingCycle(cycle: 'monthly' | 'yearly') {
    this.billingCycle.set(cycle);
  }

  toggleBillingCycle() {
    this.billingCycle.update(cycle => cycle === 'monthly' ? 'yearly' : 'monthly');
  }
}
