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
import Tile from 'ol/layer/Tile';
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [AngularOpenlayersModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  map: any;
  
  restaurantsNearMe = [{
    name: 'Restaurant 1',
    long: 77.6233,
    lat: 12.9175
  }, {
    name: 'Restaurant 2',
    long: 77.6423,
    lat: 12.9181
  }, {
    name: 'Restaurant 3',
    long: 77.6325,
    lat: 12.9182
  }, {
    name: 'Restaurant 4',
    long: 77.6275,
    lat: 12.9182
  }, {
    name: 'Restaurant 5',
    long: 77.6275,
    lat: 12.9252
  }];
  

  ngOnInit() {

    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM(),
        }),
        
      ],
      view: new View({
        center: olProj.fromLonLat([77.6234, 12.9166]),
        zoom: 15,
      })
    });

    this.restaurantsNearMe.forEach((restaurant) => this.addMarker(restaurant.long, restaurant.lat, restaurant.name));

  }
  
  addMarker(lon: number, lat: number, text: string) {
    let markerStyle = new Style({
      image: new Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        height: 40,
        opacity: 1,
        src: '../../assets/marker.webp'
      })),
      text: new Text({
        scale: 1.6,
        text: text,
        fill: new Fill({
          color: "#009688"
        }),
        stroke: new Stroke({
          color: "#ffffff",
          width: 2
        }),
      }) 
    });

    let markerSource = new VectorSource();
    this.map.addLayer(new VectorLayer({
      source: markerSource,
      style: markerStyle,
    }))

    var iconFeature = new Feature({
      geometry: new Point(olProj.transform([lon, lat], 'EPSG:4326',
        'EPSG:3857')),
      name: 'Null Island',
      population: 4000,
      rainfall: 500
    });

    
    markerSource.addFeature(iconFeature);
  }
}
