import { Component, Input, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [NgClass],
  templateUrl: './heavy-loaders-slow.html',
  styleUrl: './heavy-loaders-slow.css'
})
export class HeavyLoadersSlow {

  readonly cssClass = input.required<string>();
  //@Input({required: true}) cssClass!: string;

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {
      console.log('Cargando...');
    }
  }
}
