import { AppUser } from './../models/user';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: AppUser[] = [];
  authenticatedUser!: AppUser;

  constructor() {
    this.users.push(
      {
        userId: 1,
        username: 'MOUAD',
        password: 'password123',
        roles: ['ADMIN', 'USER'],
      },
      {
        userId: 2,
        username: 'MOHAMMED',
        password: 'password123',
        roles: ['USER'],
      },
      {
        userId: 3,
        username: 'ILIAS',
        password: 'password123',
        roles: ['USER'],
      }
    );
  }

  public login(username: string, password: string): Observable<AppUser> {
    let appUser = this.users.find((user) => user.username === username);
    if (!appUser) return throwError(() => new Error('User not found'));
    if (appUser.password !== password) return throwError(() => new Error('Bad Credentials'));
    return of(appUser);
  }

  public authenticateUser(appUser: AppUser): Observable<boolean> {
    this.authenticatedUser = appUser;
    localStorage.setItem(
      'authUser',
      JSON.stringify({
        username: appUser.username,
        password: appUser.password,
        roles: appUser.roles,
        jwt: 'JWT_TOKEN',
      })
    );

    return of(true);
  }

  public isAdmin(role: string): boolean {
    return this.authenticatedUser!.roles.includes(role);
  }

  public isAuthenticated(): boolean {
    return this.authenticatedUser != undefined;
  }
}
