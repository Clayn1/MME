import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../../models/UserModel';
import {TokenModel} from '../../../models/TokenModel';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {apiPath} from '../../../globals';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token = null;
  private isAuth = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.isAuth.next(this.isAuthenticated());
    this.token = localStorage.getItem('Authorization');
  }

  login(user: UserModel): Observable<TokenModel> {
    return this.http.post<TokenModel>(apiPath + 'user/auth/', user)
      .pipe(tap(({jwtToken}) => {
        this.isAuth.next(true);
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
  getUsername(): string {
    console.log(this.token);
    const temp = this.token.toString().substr(8);
    const s = atob(temp.split('.')[1]);
    const parse = JSON.parse(s);
    return parse.sub;
  }

  isAuthenticated(): boolean {
    return !!this.token || !!localStorage.getItem('Authorization');
  }
  authSubscribe(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  logout(): void {
    this.isAuth.next(false);
    this.setToken(null);
    localStorage.clear();
  }
}
