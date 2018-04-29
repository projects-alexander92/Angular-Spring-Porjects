import {Component, OnInit} from '@angular/core';
import {UserSharedService} from '../user/services/user.shared.service';
import {Router} from '@angular/router';
import {NavbarService} from './navbar.service';

@Component({
  selector: 'nav-root',
  templateUrl: './nav.component.html',
  providers: [NavbarService]
})
export class NavComponent implements OnInit {
  isLoggedIn = false;
  username: string;

  constructor(private userSharedService: UserSharedService,
              private router: Router,
              private navbarService: NavbarService) {
  }

  ngOnInit() {
    this.userSharedService.isCurrentlyLoggedIn.subscribe((response) => {
      this.isLoggedIn = response;
      this.username = sessionStorage.getItem('username');
      if (this.isLoggedIn === true) {
        this.navbarService.getUserRole().subscribe((resp) => {
          sessionStorage.setItem('faction', resp.toString());
        });
      }
    });
  }

  initLogout(ev) {
    ev.preventDefault();
    sessionStorage.clear();
    this.userSharedService.changeIsCurrentlyLoggedIn(false);
    this.router.navigate(['/']);
  }
}
