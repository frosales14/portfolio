import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-social-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './social-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialListComponent { }
