import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F' | 'S';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export default class ControlFlow {

  public showContent = signal(false);
  public grade = signal<Grade>('S');
  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte']);
  public frameworks2 = signal(['react', 'vue', 'svelte', 'angular']);

  //Metodo para cambiar el valor de la señala basado en el valor actual
  public toggleContent() {
    //Opcion 1
    this.showContent.set(!this.showContent());
    //Opcion 2
    // this.showContent.update(value => !value);
    //Opcion 3
    // this.showContent.update(value => {
    //   return !value;
    // });
  }
}
