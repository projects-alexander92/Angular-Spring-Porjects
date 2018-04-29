import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable()
export class UserAlternativeFormService {

  constructor(private httpClient: HttpClient) {
  }

  saveUser(user) {
    console.log(user);
    return this.httpClient.post('http://localhost:8080/ng-user/add', user);
  }
}
