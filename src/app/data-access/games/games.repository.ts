import { Observable } from 'rxjs';
import { BaseRepositoryDirective } from '../_base/directives/base-repository.directive';
import { Injectable } from '@angular/core';
import { GameConfigModel } from '../../features/games/models/game-config.model';

@Injectable({ providedIn: 'root' })
export class GamesRepository extends BaseRepositoryDirective {
  public createGame(cmd: GameConfigModel): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/game/create`, cmd, {
      withCredentials: true,
    });
  }
}
