import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  public loginWithSpotify() {
    const clientId = '8dc7deb02262449cac03e0ba56ec38aa';
    const redirectUri = 'https://empathetic-youth-production.up.railway.app/api/spotify/callback';
    const scopes =
      'playlist-read-private playlist-read-collaborative user-read-email user-read-private user-library-read';

    window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
      scopes
    )}&redirect_uri=${encodeURIComponent(redirectUri)}&show_dialog=true`;
  }
}
