import { Component, inject } from '@angular/core';
import { SessionsRepository } from '../../../../data-access/sessions/sessions.repository';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private readonly sessionsRepository = inject(SessionsRepository);

  public logout(): void {
    this.sessionsRepository.logout().subscribe();
  }
}
