import { Component } from '@angular/core';

export interface Weather {
  id: Number;
  city: String;
  temperature: Number;
  weather: String; 
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
weather: Array<Weather> = [{
  id: 1,
  city: "Bangalore",
  temperature: 23,
  weather: "Precipitation"
}, {
  id: 2,
  city: "Chennai",
  temperature: 28,
  weather: "Sunny"
}, {
  id: 3,
  city: "Hyderabad",
  temperature: 34,
  weather: "Sunny"
}]
}
