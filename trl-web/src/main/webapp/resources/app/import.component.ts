import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Phone } from './phone';
import { PhoneService } from './phone.service';

@Component({
    selector: 'import',
    templateUrl: '../import.component.html'
})

export class ImportComponent implements OnInit {

    phones: Phone[] = [];

    constructor(
        private phoneService: PhoneService) {
    }

    getPhones(): void {
        this.phoneService
            .searchPhones()
            .subscribe(phones => this.phones = phones);
    }

    ngOnInit() {
        this.getPhones();
    }

}
