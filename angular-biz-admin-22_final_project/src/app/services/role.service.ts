import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class RoleService extends RestService{
  endpoint = `${environment.api}/roles`;
}
