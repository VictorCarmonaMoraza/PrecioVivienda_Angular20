import { Component } from '@angular/core';
import { Title } from "@shared/title/title";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-transition',
  imports: [CommonModule, Title],
  templateUrl: './view-transition.html',
  styleUrl: './view-transition.css'
})
export default class ViewTransition {

}
