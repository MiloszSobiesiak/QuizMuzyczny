import { HttpClient } from '@angular/common/http';
import { Directive, inject } from '@angular/core';

@Directive()
export class BaseRepositoryDirective {
  protected readonly http = inject(HttpClient);
  protected readonly apiUrl = 'https://empathetic-youth-production.up.railway.app/api';
}
