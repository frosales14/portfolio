import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  text = input.required<string>();
  @Output() btnClickAction = new EventEmitter<void>();
}
