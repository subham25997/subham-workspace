import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
 options: google.maps.MapOptions = {
  center: {lat: 12.840711, lng: 77.676369},
  zoom: 20
};
}
