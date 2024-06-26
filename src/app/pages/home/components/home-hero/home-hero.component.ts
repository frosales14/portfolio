import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  afterNextRender,
  inject,
} from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroComponent {
  private injector = inject(Injector);

  onContactMeClick = () => {
    afterNextRender(
      () => {
        const contactSection = document.getElementById(
          'contact'
        ) as HTMLElement;
        if (!contactSection) return;
        contactSection.scrollIntoView({ behavior: 'smooth' });
      },
      { injector: this.injector }
    );
  };
}
