import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidemenu } from '@shared/sidemenu/sidemenu';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, Sidemenu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {

}
