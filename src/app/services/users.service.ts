import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { Users, UsersListResponse } from '@interface/req-response';
import { UserResponse } from '@interface/user-response';
import { delay, map } from 'rxjs';

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

  public countrie = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http.get<UsersListResponse>('https://reqres.in/api/users?page=2')
      .pipe(delay(1000)) // Simulate a delay for loading state
      .subscribe({
        next: (response) => {

          this.#state.set({
            loading: false,
            users: response.data,
          })

        }
      });
  }

  getUserById(idActual: string) {
    let id= 2;
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(delay(1000),
      map(resp=>resp.data)

      );
  }
}
