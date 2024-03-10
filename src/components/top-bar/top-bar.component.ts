import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  userDetails: any = localStorage.getItem("user-details");
  userName = this.userDetails ? JSON.parse(this.userDetails).firstName : 'Ramakrishna';
}
