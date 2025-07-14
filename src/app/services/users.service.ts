import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Users, UsersResponse } from '@interface/req-response';
import { delay } from 'rxjs';

interface State {
  users: Users[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: []
  });

  public users = computed(()=>this.#state().users);
  public loading = computed(()=>this.#state().loading);

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users?page=2')
    .pipe(delay(15000)) // Simulate a delay for loading state
      .subscribe({
        next: (response) => {

          this.#state.set({
            loading: false,
            users: response.data,
          })

        }
      });


  }
}
