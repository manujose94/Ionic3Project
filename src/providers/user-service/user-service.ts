import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SERVER_URL} from './config';
import {Http} from '@angular/http';
import 'rxjs/Rx';
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let brokersURL = SERVER_URL + 'api/user/';

@Injectable()
export class UserServiceProvider {

  constructor(public HttpClient: HttpClient, public http: Http) {
    console.log('Hello UserServiceProvider Provider');
  }
  getUsers() {
    return this.HttpClient.get(brokersURL);
  }

  getUserfindById(id) {
    return this.HttpClient.get(brokersURL+id);
  }

  getUsersfindById(id) {
    return this.http.get(brokersURL + id)
        .map(res => res.json())
        .toPromise();
    }

    getUsersfindAll() {
      alert("findall");
      return this.http.get(brokersURL)
          .map(res => res.json())
          .toPromise();
  }
}
