import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { MyWorkComponent } from './components/my-work/my-work.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent, MyWorkComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
