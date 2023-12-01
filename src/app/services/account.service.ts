import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetailsResponse } from '../models/user-details.interface';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }


  getAccountDetailsBySession(): Observable<UserDetailsResponse> {
    let session_id = localStorage.getItem('SESSION_ID');
    return this.http.get<UserDetailsResponse>(`${environment.baseUrl}/account?session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      });
  }
  getAccountDetailsById(): Observable<UserDetailsResponse> {
    let session_id = localStorage.getItem('SESSION_ID')
    let user_id = localStorage.getItem('USER_ID');
    return this.http.get<UserDetailsResponse>(`${environment.baseUrl}/account/${user_id}?session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      });
  }


}
