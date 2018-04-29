import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NavbarService {

  constructor(private httpClient: HttpClient) {
  }

  getUserRole() {
    const username = sessionStorage.getItem('username');
    return this.httpClient.get('http://localhost:8080/authenticate/' + username);
  }
}
