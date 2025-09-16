import { Observable } from 'rxjs';
import { BaseRepositoryDirective } from '../_base/directives/base-repository.directive';
import { Injectable } from '@angular/core';
import { GameConfigModel } from '../../features/games/models/game-config.model';
import { GameCreatedResponse } from './dtos/game-created-response';

@Injectable({ providedIn: 'root' })
export class GamesRepository extends BaseRepositoryDirective {
  public createGame(cmd: GameConfigModel): Observable<GameCreatedResponse> {
    return this.http.post<GameCreatedResponse>(`${this.apiUrl}/game/create`, cmd, {
      withCredentials: true,
    });
  }
}
