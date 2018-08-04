import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NavigationService } from '@td/navigation.service';
import { NavigationItem } from '@td/core/models/navigation-item';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  navigationItems: Observable<Array<NavigationItem>>;

  constructor(private navigationService: NavigationService) {
    this.navigationItems = this.navigationService.getMainNavigationItems();
  }

  ngOnInit() {
  }

}
