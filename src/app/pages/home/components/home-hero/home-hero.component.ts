import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroComponent {}
