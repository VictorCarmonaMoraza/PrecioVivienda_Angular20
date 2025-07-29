import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Countrie } from '@interface/country.interface';
import { Countries } from '@services/countries';
import { Title } from "@shared/title/title";


@Component({
  selector: 'app-users',
  imports: [CommonModule, Title, RouterModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export default class Users {

  //public usersService = inject(UsersService);
  readonly countriesService = inject(Countries);
   countries = signal<Countrie[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    this.countriesService.getSpainData().subscribe({
      next: (res) => {
        this.countries.set(res);
         this.loading.set(false);
      },
      error: (err) => {
       console.error('Error al obtener países', err);
        this.loading.set(false);
      }
    });
  }


}
