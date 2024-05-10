import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IBreadcrumb } from './breadcrumb.interface';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public breadcrumbs: IBreadcrumb[] = [];
  public current?: IBreadcrumb;

  private routerSubscription?: Subscription;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.updateBreadcrumbs();
    this.routerSubscription = this.router.events.subscribe(() => {
      this.updateBreadcrumbs();
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private updateBreadcrumbs(): void {
    const breadcrumbs = this.buildBreadcrumb(this.activatedRoute.root);
    this.current = breadcrumbs.pop();
    this.breadcrumbs = breadcrumbs;
  }

  private buildBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    let caption: string = route.routeConfig?.title?.toString() ?? '';
    let path: string = route.routeConfig?.path ?? '';

    const lastRoutePart = path.split('/').pop() || '';
    const isDynamicRoute = lastRoutePart.startsWith(':');

    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      caption = route.snapshot.params[paramName];
    }

    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadcrumb = {
      caption: caption,
      url: nextUrl,
    };

    const newBreadcrumbs = breadcrumb.caption
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];

    if (route.firstChild) {
      return this.buildBreadcrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}
