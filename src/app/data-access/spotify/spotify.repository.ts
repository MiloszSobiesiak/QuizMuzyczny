import { Injectable } from '@angular/core';
import { BaseRepositoryDirective } from '../_base/directives/base-repository.directive';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyRepository extends BaseRepositoryDirective {
  public getFavourites(): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/spotify/favourites`, {
      withCredentials: true,
    });
  }
}
