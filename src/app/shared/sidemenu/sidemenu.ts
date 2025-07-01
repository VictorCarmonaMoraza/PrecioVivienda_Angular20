import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.html',
  styleUrl: './sidemenu.css'
})
export class Sidemenu {

  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route.path && route.path)
    .filter(route => !route.path?.includes(':'))

}
