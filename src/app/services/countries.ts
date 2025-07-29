import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { CountrieIndividual } from '@interface/countri.interface';
import { Countrie } from '@interface/country.interface';
import { delay, map, Observable } from 'rxjs';

interface StatePais {
  countrie: CountrieIndividual | undefined;
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Countries {

  readonly #http = inject(HttpClient);
  private readonly URL = 'https://restcountries.com/v3.1/lang/spanish';

  #statePais = signal<StatePais>({
    loading: true,
    countrie: undefined
  });

  public countrie = computed(() => this.#statePais().countrie);
  public loading = computed(() => this.#statePais().loading);

  constructor() {}

  getSpainData(): Observable<Countrie[]> {
    return this.#http.get<Countrie[]>(this.URL);
  }

  getCountryByCode(code: string): Observable<CountrieIndividual> {
    const url = `https://restcountries.com/v3.1/alpha?codes=${code}`;
    return this.#http.get<CountrieIndividual[]>(url).pipe(
      delay(1000),
      map(resp => resp[0])
    );
  }

  setPais(pais: CountrieIndividual): void {
    this.#statePais.set({
      countrie: pais,
      loading: false
    });
  }
}
