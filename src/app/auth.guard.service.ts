import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()

export class AuthGuard implements CanActivateFn {

  constructor(private authService: AuthService,private router: Router) {

  }

  canActivateFn(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return this.authService.isAuntificated()
    .then(
      (authenticated: boolean) => {
        if(authenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      }
    )
  }
}