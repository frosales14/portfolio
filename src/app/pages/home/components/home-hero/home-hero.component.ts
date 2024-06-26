import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroComponent {
  onContactMeClick() {
    const contactSection = document.getElementById('contac') as HTMLElement;
    if (!contactSection) return;
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}
