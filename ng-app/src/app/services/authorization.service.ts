import { Injectable } from '@angular/core';
import { UserService } from './api/user.service';
import { ExtendedUser } from '../models/dto/iuser';
import { RoleEnum } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private currentUser: ExtendedUser = null;

  constructor(private userService: UserService) { }

  /**
   * getting current user into promise
   */
  public async getCurrentUser(): Promise<ExtendedUser> {

    if (this.currentUser == null) {
      const request =  this.userService.getCurrentUser();
      this.currentUser =  await request.toPromise();
    }
    return this.currentUser;
  }

  /**
   *
   * @param roles for check permission by roles
   */
  async checkPermission( ...roles: RoleEnum[]): Promise<boolean> {
    const u = await this.getCurrentUser();
    if (roles.length < 1 || !u.roles || u.roles.length < 1 ) {
      return false;
    }

    if (roles.some(r => u.roles.some(x => x.id === r))) {
      return true;
    }
    return false;
  }

  logout() {
     this.currentUser = null;
  }

}
