import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Phone } from '/resources/app/phone';
import { PhoneService } from '/resources/app/phone.service';

@Component({
    selector: 'import',
    templateUrl: '/resources/app/import.component.html'
})

export class ImportComponent implements OnInit {

    phones: Phone[] = [];

    constructor(
        private phoneService: PhoneService) {
    }

    getPhones(): void {
        this.phoneService
            .searchPhones()
            .then(phones => this.phones = phones);
    }

    ngOnInit() {
        this.getPhones();
    }

}
