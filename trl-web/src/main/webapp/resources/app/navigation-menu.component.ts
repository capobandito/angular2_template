import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {NavigationMenuService} from './navigation-menu.service';

@Component({
    selector: 'navigation-menu',
    templateUrl: '/resources/app/navigation-menu.component.html'
})
export class NavigationMenuComponent implements OnInit {

    constructor(
        private menuService: NavigationMenuService) {
    }

    notificationsCount: Number = 0;

    ngOnInit() {
        // this.menuService
        //     .notificationsCount()
        //     .then(notifCount => this.notificationsCount = notifCount);

        this.menuService
            .notificationsCountObs()
            .subscribe(notifCount => this.notificationsCount = notifCount, error => console.log(error));
    }

}