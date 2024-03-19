import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  navItems = [
    { text: 'Home', icon: 'home' },
    { text: 'About Me', icon: 'person' },
    { text: 'Services', icon: 'design_services' },
    { text: 'Proyects', icon: 'work' },
    { text: 'Contact', icon: 'mail' },
  ];
}
