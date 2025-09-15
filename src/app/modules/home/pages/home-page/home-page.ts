import { Component, inject } from '@angular/core';
import { SessionsRepository } from '../../../../data-access/sessions/sessions.repository';
import { SpotifyRepository } from '../../../../data-access/spotify/spotify.repository';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private readonly sessionsRepository = inject(SessionsRepository);
  private readonly spotifyRepository = inject(SpotifyRepository);

  public logout(): void {
    this.sessionsRepository.logout().subscribe();
  }

  public getFavourites(): void {
    this.spotifyRepository.getFavourites().subscribe((x) => console.log(x));
  }
}
