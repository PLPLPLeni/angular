import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isValid(login?: string, password?: string): boolean {
    return login == 'toto' && password == '1234';
  }

  public saveCurrentUser(login: string): void {
    sessionStorage.setItem('login', login);
  }

  public getCurrentUser(): string | null {
    return sessionStorage.getItem('login');
  }
}
