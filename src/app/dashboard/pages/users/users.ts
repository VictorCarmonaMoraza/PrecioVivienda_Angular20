import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
  countries:Countrie[] = [];

ngOnInit(): void {
    this.countriesService.getSpainData().subscribe({
      next: (res) => {
        this.countries = res; // El API devuelve un array de países
      },
      error: (err) => console.error('Error al obtener países', err)
    });
  }

}
