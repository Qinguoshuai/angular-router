import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,  CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';
export interface CanComponentDeactivate {
  CanDeactivate: ()  => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.CanDeactivate ? component.CanDeactivate() : true;
  }
  // canDeactivate(   , CanDeactivate<CrisisDetailComponent>
  //   component: CrisisDetailComponent,
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | boolean {
  //   // Get the Crisis Center ID
  //   console.log(route.paramMap.get('id'));

  //   // Get the current URL
  //   console.log(state.url);

  //   // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
  //   if (!component.crisis || component.crisis.name === component.editName) {
  //     return true;
  //   }
  //   // Otherwise ask the user with the dialog service and return its
  //   // observable which resolves to true or false when the user decides
  //   return component.dialogService.confirm('Discard changes?');
  // }
}
