import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyServicesComponent {
  services = [
    {
      id: '1S',
      icon: 'assets/svg/website_responsive.svg',
      title: 'Landing Page Creation',
      text: 'I design and develop responsive websites that deliver a seamless experience on desktops, tablets, and mobile devices.',
    },
    {
      id: '2S',
      icon: 'assets/svg/web_app.svg',
      title: 'Web App Creation',
      text: 'I specialize in building interactive web applications that empower your business and engage your users.',
    },
    {
      id: '3S',
      icon: 'assets/svg/landing_makeover.svg',
      title: 'Landing Page Makeover',
      text: "I take your existing landing page and transform it into a conversion machine. Through a data-driven approach, I'll identify areas for improvement and implement strategic changes",
    },
  ];
}
