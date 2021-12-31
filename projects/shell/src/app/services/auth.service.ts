import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _userEmail = '';

  get userEmail() {
    return this._userEmail;
  }

  set userEmail(name: string) {
    this._userEmail = name;
  }
}
