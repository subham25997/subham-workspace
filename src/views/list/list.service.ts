import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private httpClient: HttpClient) { }

  getWeatherData() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=12.9166&longitude=77.6234&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto&past_days=0&forecast_days=7";
    return this.httpClient.get<Weather>(url);
  }
}
