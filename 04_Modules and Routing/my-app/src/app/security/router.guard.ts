import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {RouterGuardService} from './router.guard.service';

@Injectable()
export class RouterGuard implements CanActivate {

  constructor(private routerGuardService: RouterGuardService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //check if user is logged in
    if (!this.routerGuardService.isUserLoggedIn()) {
      this.router.navigate(['/login']);
    }

    //check if user is from the same faction
    const path = route.routeConfig.path;
    if (path === 'attack-faction/:name') {
      const userFaction = sessionStorage.getItem('faction');
      const currentFaction = route.url[1].path;
      if (userFaction.toLowerCase() === currentFaction.toLowerCase()) {
        this.router.navigate(['/attack-faction/error/explain'])
      }
    }
    return true;
  }

}
