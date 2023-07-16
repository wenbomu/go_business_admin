import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http: HttpClient) {
  }

  login(data: any): Observable<any> {
    return this.http.post(`${environment.api}/login`, data);
  }

  register(data: any): Observable<User> {
    return this.http.post<User>(`${environment.api}/register`, data);
  }

  // user(): Observable<any> {
  //   return this.http.get(`${environment.api}/user`, {
  //     withCredentials: true
  //   });
  // }

  user(): Observable<User> {
    return this.http.get<User>(`${environment.api}/user`);
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${environment.api}/logout`, {});
  }

  updateInfo(data: any): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/info`, data);
  }

  updatePassword(data: any): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/password`, data);
  }
}
