/**
 * Created by Jan.Kovar on 29.11.2016.
 */
import {Component, OnInit} from "@angular/core";
import {PhoneService} from "../phone.service";
import {Phone} from "../phone";
declare var $: any

@Component({
    moduleId: module.id,
    selector: 'data-table',
    templateUrl: './table.data.component.html'

})

export class TableDataComponent implements OnInit {

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

    phones: Phone[] = [{id: 300, phoneNumber: "ui-123-456"}, {id: 400, phoneNumber: "ui-987-654"}]

    constructor(private phoneService: PhoneService) {
    }

    getPhones(): void {
        this.phoneService
            .searchPhones()
            .subscribe(phones => this.phones = this.phones.concat(phones), error => console.log(error), this.setDataTable);
    }

    ngOnInit() {
        this.getPhones();
    }

    setDataTable() {

        $('#example1').DataTable({
            "paging": true,
            "lengthChange": false,
            "searching": true,
            "ordering": false,
            "info": true,
            "autoWidth": false
        });

    }


}
