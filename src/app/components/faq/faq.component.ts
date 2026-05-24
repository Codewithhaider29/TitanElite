import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  // Signal to control which FAQ is expanded (null if none are expanded)
  activeFaqId = signal<number | null>(null);

  faqList: FaqItem[] = [
    {
      id: 1,
      question: 'Who is eligible for a Titan Elite membership?',
      answer: 'We cater to executive athletes, professional competitors, and high-achievers looking to optimize their lifestyle. Complete beginners are absolutely welcome—our sports science master coaches personalize physical baselines for all starting points.'
    },
    {
      id: 2,
      question: 'What is included in the metabolic profiling assessment?',
      answer: 'Our diagnostic profiles include 3D joint-load posture gait scans, resting calorimetry metabolic rate analysis, VO2 Max target heart rate zone assessments, and optional clinical biomarker reviews overseen by our nutrition team.'
    },
    {
      id: 3,
      question: 'Can I freeze or cancel my protocol plan?',
      answer: 'Yes. VIP and Olympic protocol plans offer unlimited seasonal freezes to accommodate business travel or competitive schedules. Standard membership cancellations require a simple 30-day notice filed directly with your private concierge.'
    },
    {
      id: 4,
      question: 'Is there a guest policy for the VIP coworking lounges?',
      answer: 'Yes. VIP Elite and Olympic Protocol tiers receive 2 private guest lounge passes monthly for clients or business partners. Titan Club members have dedicated single-access privileges with optional guest upgrade passes.'
    }
  ];

  toggleFaq(id: number) {
    this.activeFaqId.update(currentId => currentId === id ? null : id);
  }
}
