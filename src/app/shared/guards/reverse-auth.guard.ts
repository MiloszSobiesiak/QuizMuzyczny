import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';
import { SessionsRepository } from '../../data-access/sessions/sessions.repository';

@Injectable({ providedIn: 'root' })
export class ReverseAuthGuard implements CanActivate {
  private readonly sessionsRepository = inject(SessionsRepository);
  private readonly router = inject(Router);

  canActivate(): Observable<boolean> {
    return this.sessionsRepository.isLoggedIn().pipe(
      map((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['/home-page']);
          return false;
        }
        return true;
      }),
      catchError(() => of(true))
    );
  }
}
