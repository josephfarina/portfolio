import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubCodeService {

    constructor(private http: Http) {}

    getCode() {
        return this.http.get('https://raw.githubusercontent.com/JosephFarina/kiwi_partners/master/app_client/app/services/authentication.service.ts')
            .map(response => {
                console.log(response);
                return response;
            });
    }
}
