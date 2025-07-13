import { Injectable, signal } from '@angular/core';
import { Users } from '@interface/req-response';

interface State {
  users: Users[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #state = signal<State>({
    loading: true,
    users: []
  });

  constructor() {
    console.log('Cargando data');
   }
}
