import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './my-work.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyWorkComponent {
  proyects = [
    {
      id: 'proyect1',
      name: 'countries app',
      stack: ['assets/svg/angular.svg', 'assets/svg/tailwind.svg'],
      description:
        'This Angular app, built with Tailwind CSS, unlocks a world of information about countries. Search by name, capital, or region using the REST Countries API. Discover flags, populations, currencies, and more!',
      previewImg: 'assets/pictures/proyects/countries-app-preview.webp',
    },
  ];
}
