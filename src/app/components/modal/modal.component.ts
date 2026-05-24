import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../../app.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  // Inject the parent root AppComponent to access its signal handlers
  protected app = inject(App);

  // Wizard state machine
  formStep = signal<number>(1);

  // Wizard answers
  selectedGoal = signal<string | null>(null);
  athleteName = signal<string>('');
  athleteEmail = signal<string>('');
  experienceLevel = signal<string | null>(null);

  selectGoal(goal: string) {
    this.selectedGoal.set(goal);
    this.nextStep();
  }

  selectExperience(level: string) {
    this.experienceLevel.set(level);
  }

  nextStep() {
    this.formStep.update(step => step + 1);
  }

  prevStep() {
    this.formStep.update(step => step - 1);
  }

  submitApplication(event: Event, name: string, email: string) {
    event.preventDefault();
    if (name.trim() && email.trim()) {
      this.athleteName.set(name.trim());
      this.athleteEmail.set(email.trim());
      this.nextStep();
    }
  }

  closeModal() {
    this.app.closeModal();
    // Reset wizard
    this.formStep.set(1);
    this.selectedGoal.set(null);
    this.experienceLevel.set(null);
  }
}
