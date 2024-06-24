import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeroComponent,
    MyWorkComponent,
    MyServicesComponent,
    ContactMeComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
