import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly url_base = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post(this.url_base + "/users/register", user);
  }

  getAllUsers() {
    return this.http.get(this.url_base + "/users");
  }
}
