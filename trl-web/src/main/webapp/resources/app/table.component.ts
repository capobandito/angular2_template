import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Phone } from './phone';
import { PhoneService } from './phone.service';
import {OrderBy} from "./order-by";
import {Format} from "./format";

@Component({
    selector: 'table',
    templateUrl: '/resources/app/table.component.html',
    pipes: [OrderBy, Format]
})

export class TableComponent implements OnInit {

    columns: any[] = [
        {
            display: 'Id', //The text to display
            variable: 'id', //The name of the key that's apart of the data array
            filter: 'number' //The type data type of the column (number, text, date, etc.)
        },
        {
            display: 'Phone number', //The text to display
            variable: 'phoneNumber', //The name of the key that's apart of the data array
            filter: 'text' //The type data type of the column (number, text, date, etc.)
        }
    ];
    sorting: any = {
        column: 'id', //to match the variable of one of the columns
        descending: false
    };

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

    selectedClass(columnName): string{
        return columnName == this.sorting.column ? 'sort-' + this.sorting.descending : 'sort-' + false;
    }

    changeSorting(columnName): void{
        var sort = this.sorting;
        if (sort.column == columnName) {
            sort.descending = !sort.descending;
        } else {
            sort.column = columnName;
            sort.descending = false;
        }
    }

    convertSorting(): string{
        return this.sorting.descending ? '-' + this.sorting.column : this.sorting.column;
    }

}
