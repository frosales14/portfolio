import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
  inject,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

import { BehaviorSubject, delay, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('scrollToTarget', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '300ms ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in-out',
          style({ opacity: 0, transform: 'translateY(20px)' })
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  router = inject(Router);
  scrollTarget$ = new BehaviorSubject<string | null>(null);

  currentTagetId = '';

  navItems = [
    { text: 'Home', icon: 'home', section: 'hero', baseUrl: '/' },
    { text: 'About Me', icon: 'person', section: 'hero', baseUrl: '/' },
    {
      text: 'Services',
      icon: 'design_services',
      section: 'services',
      baseUrl: '/',
    },
    { text: 'Proyects', icon: 'work', section: 'my-work', baseUrl: '/' },
    { text: 'Contact', icon: 'mail', section: 'contact', baseUrl: '/' },
  ];

  constructor() {
    afterNextRender(() => {
      this.listenScrollTarget();
      this.listenNavigationEnds();
    });
  }

  listenNavigationEnds() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          const element = document.getElementById(this.currentTagetId);
          return element;
        }),
        filter((element: HTMLElement | null) => !!element),
        delay(50),
        tap((element) => {
          if (!element) return;

          element.scrollIntoView({ behavior: 'smooth' });
        })
      )
      .subscribe();
  }

  listenScrollTarget() {
    this.scrollTarget$
      .pipe(
        filter((targetId: string | null) => !!targetId),
        map(() => {
          const element = document.getElementById(this.currentTagetId);
          return element;
        }),
        delay(50),
        tap((element) => {
          if (!element) return;

          element.scrollIntoView({ behavior: 'smooth' });
        })
      )
      .subscribe((targetId) => {
        if (!targetId) return;
      });
  }

  scrollToElement(target: any) {
    this.currentTagetId = target.section;
    this.router.navigateByUrl(target.baseUrl);
    this.scrollTarget$.next(target.section);
  }

  scrollToAnchorAfterRedirect() {
    const element = document.getElementById(this.currentTagetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
