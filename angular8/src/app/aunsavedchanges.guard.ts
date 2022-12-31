import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from './add-user/add-user.component';

@Injectable({
  providedIn: 'root'
})
export class AunsavedchangesGuard implements CanDeactivate <AddUserComponent> {
  canDeactivate(component: AddUserComponent) {
    
  if(component.userName.dirty){
    return window.confirm('you have usaved changes,are you sure want to namgivate');
  }else{
    return true;
  }
}
}