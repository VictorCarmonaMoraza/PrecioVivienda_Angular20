import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, Title],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-title [title]="currentFramework()" withShadow/>
<pre>{{frameworkAsSignal() | json}}</pre>
<pre>{{frameworkAsProperty | json}}</pre>
  `,
})
export default class ChangeDetection {

  public currentFramework = computed(
    () => `Change Detection:  - ${this.frameworkAsSignal().name}`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {
    setTimeout(() => {
      //this.frameworkAsProperty.name = 'React';

      //Fortma 1
      // this.frameworkAsSignal.update(value=>({
      //   ...value,
      //   name: 'React'
      // }))

      //Forma 2
      this.frameworkAsSignal.update(value => {
        value.name = 'React';
        return { ...value };
      })

      console.log('Hecho');
    }, 3000);
  }
}
