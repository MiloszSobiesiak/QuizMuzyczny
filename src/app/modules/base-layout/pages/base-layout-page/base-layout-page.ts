import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base-layout-page',
  imports: [RouterOutlet],
  templateUrl: './base-layout-page.html',
  styles: [
    `
      :host {
        display: flex;
        flex: 1 1 auto;
      }
    `,
  ],
})
export class BaseLayoutPage {}
