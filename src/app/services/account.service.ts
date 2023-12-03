import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetailsResponse } from '../models/user-details.interface';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ListListResponse } from '../models/lists-list.interface';

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
    let session_id = localStorage.getItem('SESSION_ID');
    let user_id = localStorage.getItem('USER_ID');
    return this.http.get<UserDetailsResponse>(`${environment.baseUrl}/account/${user_id}?session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      });
  }

  getListFromAcc():Observable<ListListResponse>{
    let session_id = localStorage.getItem('SESSION_ID');
    let user_id = localStorage.getItem('USER_ID');
    return this.http.get<ListListResponse>(`${environment.baseUrl}/account/${user_id}/lists?session_id=${session_id}`, 
    {
      headers:{
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    });
  }
  createList(name:string, description:string):Observable<any>{
    let session_id = localStorage.getItem('SESSION_ID');
    return this.http.post<any>(`${environment.baseUrl}/list`, {
      name: name,
      description: description,
      language: "en"
    },{
      headers:{
        'Authorization': `Bearer ${environment.tmdbToken}`,
        'content-type': 'application/json'
      }
    })
  }
  deleteList(id:number):Observable<any>{
    let session_id = localStorage.getItem('SESSION_ID');
    return this.http.delete<any>(` https://api.themoviedb.org/3/list/${id}?session_id=${session_id}`,
    {
      headers:{
        'Authorization': `Bearer ${environment.tmdbToken}`,
        'content-type': 'application/json'
      }
    }
    );
  }


}
