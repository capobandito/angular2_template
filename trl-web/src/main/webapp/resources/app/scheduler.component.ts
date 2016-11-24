import { Component , OnInit} from '@angular/core';

declare var $:any;

@Component({
    selector: 'batch',
    templateUrl: '/resources/app/scheduler.component.html'
})

export class SchedulerComponent implements OnInit{
    ngOnInit() {

        //Easy access to options
        $.Calendar.activate();
    }
}
