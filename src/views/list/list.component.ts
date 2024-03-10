import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { DailyWeatherConditions, Weather, WeatherConditions } from './list.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  constructor(private listService: ListService) {}
  weather!: Weather;

  get currentDate() {
    return new Date();
  }

  getDate(date: string) {
    return new Date(date);
  }


  ngOnInit(): void {
      this.listService.getWeatherData().subscribe((response: Weather) => {
       this.weather = response;
      });
  }

}
