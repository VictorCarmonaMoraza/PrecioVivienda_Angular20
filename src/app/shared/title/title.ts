import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
 template:`<h1 class="text-3xl mb-5">{{title}}- Desde componente title-{{withShadow}}</h1>`,
  styleUrl: './title.css'
})
export class Title {
 @Input({required:true}) title!: string;
 @Input({transform:booleanAttribute}) withShadow: boolean= false;
}
