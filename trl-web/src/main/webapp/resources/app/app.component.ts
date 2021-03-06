import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {SidebarComponent} from './sidebar.component';
import {NavigationMenuComponent} from './navigation-menu.component';

import {PhoneService} from './phone.service';
import {NavigationMenuService} from './navigation-menu.service';

declare var $:any;

@Component({
    moduleId : module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [ROUTER_DIRECTIVES, SidebarComponent, NavigationMenuComponent],
    providers: [PhoneService, NavigationMenuService]
})

export class AppComponent implements OnInit{
    ngOnInit() {

        //Easy access to options
        var o = $.AdminLTE.options;

        $.AdminLTE.layout.activate();

        //Enable control sidebar
        if (o.enableControlSidebar) {
            $.AdminLTE.controlSidebar.activate();
        }
    }
}