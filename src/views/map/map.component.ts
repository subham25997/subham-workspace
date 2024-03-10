import { Component } from '@angular/core';
import { AngularOpenlayersModule } from 'ng-openlayers';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Text from 'ol/style/Text';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import Fill from 'ol/style/Fill'

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [AngularOpenlayersModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  map: any;
  markerSource = new VectorSource();
  restaurantsNearMe = [{
    name: 'Restaurant 1',
    long: 77.6233,
    lat: 12.9175
  }, {
    name: 'Restaurant 2',
    long: 77.6233,
    lat: 12.9183
  }];
  markerStyle!: Style;

  ngOnInit() {
    this.restaurantsNearMe.forEach(restaurant => this.addMarker(restaurant.long, restaurant.lat, restaurant.name));

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: this.markerSource,
          style: this.markerStyle,
        })
      ],
      view: new View({
        center: olProj.fromLonLat([77.6234, 12.9166]),
        zoom: 15
      })

    });

  }



  addMarker(lon: number, lat: number, text: string) {
    this.markerStyle = new Style({
      image: new Icon(/** @type {olx.style.IconOptions} */({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 1,
        height: 50,
        src: '../../assets/marker.webp'
      }),),
      text: new Text({
        text: text,
        scale: 1.5,
        backgroundFill: new Fill({
          color: 'rgba(255,255,255,0.8)'
        }),
        fill: new Fill({
          color: '#333',
        })
      })
    });


    var iconFeature = new Feature({
      geometry: new Point(olProj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'))
    });


    this.markerSource.addFeature(iconFeature);
  }
}
