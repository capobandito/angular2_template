import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NavigationMenuService {

    constructor(private http: Http) { }

    notificationsCount(): Promise<Number> {
        return this.http.get('/api/notification/count', {})
            .toPromise()
            .then(response => response.json() as Number)
            .catch(this.handleError);
    }

    notificationsCountObs(): Observable<Number> {
        return Observable.interval(5000).flatMap(() => {
            return this.http.get('/api/notification/count', {})
                .map(res => res.json() as Number);
        });
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}