import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { DailyWeatherConditions, Weather, WeatherConditions } from './list.model';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  constructor(private listService: ListService) {}


  weatherConditions: Array<WeatherConditions> = [{
    key: "temperature_2m",
    displayName: "Temperature",
    image: "sunny.webp",
    class: "temperature"
  },
  {
    key: "precipitation",
    displayName: "Precipitation",
    image: "precipitation.png",
    class: "precipitation"
  },
  {
    key: "wind_speed_10m",
    displayName: "Wind Speed",
    image: "wind.png",
    class: "temperature"
  },
  {
    key: "relative_humidity_2m",
    displayName: "Humidity",
    image: "cloudy.webp",
    class: "temperature"
  }];

  dailyWeatherConditions: Array<DailyWeatherConditions> = [{
    key: "temperature_2m_max",
    displayName: "Temperature",
    image: "sunny.webp",
  },
  {
    key: "precipitation_sum",
    displayName: "Precipitation",
    image: "precipitation.png",
  },
  {
    key: "wind_speed_10m_max",
    displayName: "Wind Speed",
    image: "wind.png",
  }];

  weather!: Weather;

  ngOnInit(): void {
      this.listService.getWeatherData().subscribe((response: Weather) => {
       this.weather = response;
      });
  }

}
