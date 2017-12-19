import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Nerd } from './nerd';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class NerdService {
    private endpoint:string = 'http://localhost:8080/api/nerds';

    constructor(private _http:Http) { }

    all():Observable<Nerd[]> {

        return this._http.get(this.endpoint).map(r => <Nerd[]>r.json());
    }
}
