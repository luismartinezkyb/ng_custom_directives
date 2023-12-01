import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor(private httpclient:HttpClient){
  // }
  private httpClient = inject(HttpClient)
  private baseUrl = 'https://reqres.in/api/users'


  getUserById(id:number): Observable<User>{
    return this.httpClient.get<SingleResponse>(`${this.baseUrl}/${id}`)
    .pipe(
      map(response=>response.data),
      tap(console.log)
    )
  }

}
