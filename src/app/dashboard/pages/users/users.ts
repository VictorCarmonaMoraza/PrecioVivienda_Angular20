import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';


@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export default class Users {

  public usersService = inject(UsersService);

}
