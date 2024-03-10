import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'app-side-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.scss'
})
export class SideNavigationComponent {

  constructor(public  appService: AppService) {
    if (window.innerWidth < 960) {
      this.appService.sideNavMinimized = true; // lg
    } 
  }

  @HostListener("window:resize", []) minimizeSideNav() {
    // lg (for laptops and desktops - screens equal to or greater than 1200px wide)
    // md (for small laptops - screens equal to or greater than 992px wide)
    // sm (for tablets - screens equal to or greater than 768px wide)
    // xs (for phones - screens less than 768px wide)
  console.log(window.innerWidth)
    if (window.innerWidth < 960) {
      this.appService.sideNavMinimized = true; // lg
    } 
    
  }
  
}
