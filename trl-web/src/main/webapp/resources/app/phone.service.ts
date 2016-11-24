import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Phone } from 'resources/app/phone';

@Injectable()
export class PhoneService {

    constructor(private http: Http) { }

    searchPhones(): Promise<Phone[]> {
        return this.http.get('/phone/', {})
            .toPromise()
            .then(response => response.json().phones as Phone[])
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}