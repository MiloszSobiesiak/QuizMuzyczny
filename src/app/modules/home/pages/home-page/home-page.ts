import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  public logout(): void {
    localStorage.removeItem('spotify_access_token');
    sessionStorage.removeItem('spotify_access_token');
  }
}
