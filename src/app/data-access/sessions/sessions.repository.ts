import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionsRepository {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly apiUrl = 'https://empathetic-youth-production.up.railway.app/api';

  public isLoggedIn(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/sessions/is-logged-in`, {
      withCredentials: true,
    });
  }

  public logout(): Observable<void> {
    return this.http
      .post<void>(
        `${this.apiUrl}/sessions/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      .pipe(tap(() => this.router.navigate(['/login'])));
  }
}
