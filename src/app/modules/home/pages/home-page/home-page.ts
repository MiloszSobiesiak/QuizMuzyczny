import { Component, inject, signal } from '@angular/core';
import { SessionsRepository } from '../../../../data-access/sessions/sessions.repository';
import { SpotifyRepository } from '../../../../data-access/spotify/spotify.repository';
import { GamesRepository } from '../../../../data-access/games/games.repository';
import { GameConfigModel } from '../../../../features/games/models/game-config.model';
import { GamesHubService } from '../../../../features/games/services/games-hub.service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private readonly sessionsRepository = inject(SessionsRepository);
  private readonly spotifyRepository = inject(SpotifyRepository);
  private readonly gamesRepository = inject(GamesRepository);
  private readonly gamesHubService = inject(GamesHubService);

  public readonly gameId = signal<string>('');

  public logout(): void {
    this.sessionsRepository.logout().subscribe();
  }

  public createGame(): void {
    const cmd: GameConfigModel = {
      numberOfTracks: 30,
      fragmentDuration: 15,
    };
    this.gamesRepository.createGame(cmd).subscribe((x) => {
      this.gamesHubService.startConnection();
      this.gameId.set(x);
      console.log(x);
    });
  }

  public joinPlayer(): void {
    this.gamesHubService.joinGame(this.gameId(), 'Januszex');
  }

  public getFavourites(): void {
    this.spotifyRepository.getFavourites().subscribe((x) => console.log(x));
  }
}
