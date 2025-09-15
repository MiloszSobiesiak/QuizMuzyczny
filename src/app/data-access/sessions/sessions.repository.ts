import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { BaseRepositoryDirective } from '../_base/directives/base-repository.directive';

@Injectable({ providedIn: 'root' })
export class SessionsRepository extends BaseRepositoryDirective {
  private readonly router = inject(Router);

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
