import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { SideNavigationComponent } from '../components/side-navigation/side-navigation.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TopBarComponent, SideNavigationComponent]
})
export class AppComponent {
  title = 'weather';
}
