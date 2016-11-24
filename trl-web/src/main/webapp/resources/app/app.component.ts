import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {SidebarComponent} from '/resources/app/sidebar.component';
import { PhoneService } from '/resources/app/phone.service';

declare var $:any;

@Component({
    selector: 'my-app',
    templateUrl: '/resources/app/app.component.html',
    directives: [ROUTER_DIRECTIVES, SidebarComponent],
    providers: [
        PhoneService
    ]
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