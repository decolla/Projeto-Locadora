import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class Rotas {
  router = inject(Router);

  voltar():void {
    this.router.navigate(['/']);
  }
}
