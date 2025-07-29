import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Countries } from '@services/countries';
import { Title } from '@shared/title/title';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [CommonModule, Title],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export default class User {

  private route = inject(ActivatedRoute);
  readonly #countriesService = inject(Countries);

  public countrie = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.#countriesService.getCountryByCode(id))
    )
  );

    public titleLabel = computed(() => {
    if (this.countrie()) {
      return `Informacion del pais: ${this.countrie()?.name.common}`;
    }
    return `Informacion del pais`;
  });

}
