import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-proyect-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyect-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProyectInfoComponent {}
