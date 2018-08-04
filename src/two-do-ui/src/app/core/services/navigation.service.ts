import { Injectable } from '@angular/core';
import { NavigationItem } from '@td/core/models/navigation-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  getMainNavigationItems(): Observable<Array<NavigationItem>> {
    return of([
      { displayName: 'Home', routerLink: '/', iconKey: 'swimming' },
      { displayName: 'Your List', routerLink: '/', iconKey: 'swimming' },
      { displayName: 'Your friends', routerLink: '/', iconKey: 'swimming' },
      { displayName: 'Settings', routerLink: '/', iconKey: 'swimming' },
    ]);
  }
}
