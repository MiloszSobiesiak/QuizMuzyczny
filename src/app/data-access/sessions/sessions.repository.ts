import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionsRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://empathetic-youth-production.up.railway.app/api';

  public isLoggedIn(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/sessions/is-logged-in`, {
      withCredentials: true,
    });
  }

  public logout(): Observable<void> {
    return this.http.get<void>(`${this.apiUrl}/sessions/logout`);
  }
}
