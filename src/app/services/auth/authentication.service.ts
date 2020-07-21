import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../../models/UserModel';
import {TokenModel} from '../../../models/TokenModel';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token = null;

  constructor(private http: HttpClient) {
  }

  login(user: UserModel): Observable<TokenModel> {
    return this.http.post<TokenModel>('http://localhost:8081/user/auth/', user)
      .pipe(tap(({jwtToken}) => {
        localStorage.setItem('Authorization', 'Bearer ' + jwtToken);
        this.setToken('Bearer ' + jwtToken);
      }));
  }
  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
  getRoles(): string[] {
    const temp = this.token.toString().substr(8);
    const s = atob(temp.split('.')[1]);
    const parse = JSON.parse(s);
    return parse.roles;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout(): void {
    this.setToken(null);
    localStorage.clear();
  }
}
