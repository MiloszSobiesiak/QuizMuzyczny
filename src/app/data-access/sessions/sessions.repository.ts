import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionsRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://d27946756601.ngrok-free.app/api';

  public isLoggedIn(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/sessions/is-logged-in`);
  }
}
