import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({ providedIn: 'root' })
export class GamesHubService {
  private hubConnection!: HubConnection;

  public startConnection(): void {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://empathetic-youth-production.up.railway.app/hubs/games', {
        withCredentials: true,
        transport: HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('SignalR connected!');
      })
      .catch((err) => console.error('Error while starting connection: ' + err));

    this.hubConnection.on('PlayerJoined', (name: string) => {
      console.log('Player joined:', name);
    });

    this.hubConnection.on('Error', (msg: string) => {
      console.error('Error:', msg);
    });
  }

  public joinGame(gameId: string, playerName: string): void {
    if (!this.hubConnection) {
      console.error('Hub not connected yet');
      return;
    }

    this.hubConnection
      .invoke('JoinGame', gameId, playerName)
      .catch((err) => console.error('JoinGame error:', err));
  }
}
