import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Phone} from "./phone";
import {Observable} from "rxjs/Rx";

@Injectable()
export class PhoneService {

    constructor(private http: Http) {
    }

    searchPhones(): Observable<Phone[]> {
        return this.http.get('/phone/').map(response => response.json().phones as Phone[]).catch(this.handleError)
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.message || error);
    }
}