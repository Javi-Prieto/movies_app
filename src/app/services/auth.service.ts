import { Injectable } from '@angular/core';
import { CreateSessionResponse } from '../models/create-session.interface';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { GetRequestTokenResponse } from '../models/create-token.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }
  getRequestToken():Observable<GetRequestTokenResponse>{
    return this.http.get<GetRequestTokenResponse>(`${environment.baseUrl}/authentication/token/new?${environment.apiKey}`);
  }
  createSession(token: string):Observable<CreateSessionResponse>{
    console.log(token);
    return this.http.post<CreateSessionResponse>(`${environment.baseUrl}/authentication/session/new?${environment.apiKey}`,
      {
        request_token: token
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
