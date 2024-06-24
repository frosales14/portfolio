import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { SocialListComponent } from '@shared/components/social-list/social-list.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ButtonComponent, SocialListComponent, ButtonComponent],
  templateUrl: './contact-me.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactMeComponent {}
