import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';
import { Title } from "@shared/title/title";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-users',
  imports: [CommonModule, Title, RouterModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export default class Users {

  public usersService = inject(UsersService);



}
