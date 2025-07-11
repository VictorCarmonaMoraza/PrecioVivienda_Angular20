import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [NgClass],
  templateUrl: './heavy-loaders-fast.html',
  styleUrl: './heavy-loaders-fast.css'
})
export class HeavyLoadersFast {

  //El signo de admiracion nos dice que siempre tendra un valor
  @Input({required:true}) cssClass!:string;

  constructor(){
    console.log('Heavy loader fast creado')
  }
}
