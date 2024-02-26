import { Injectable } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from 'angular-jwt-updated';

@Injectable()
export class AuthService {
  currentUser: any;

  constructor(private http: HttpClient) {
  }
  login(credentials) {
    return this.http.post('/api/authenticate', JSON.stringify(credentials));
  }

  logout() {}

  isLoggedIn() {
    return false;
  }
}

