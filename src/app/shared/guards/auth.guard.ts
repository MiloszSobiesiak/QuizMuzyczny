import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';
import { SessionsRepository } from '../../data-access/sessions/sessions.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private readonly sessionsRepository = inject(SessionsRepository);
  private readonly router = inject(Router);

  canActivate(): Observable<boolean> {
    return this.sessionsRepository.isLoggedIn().pipe(
      map(() => true),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
