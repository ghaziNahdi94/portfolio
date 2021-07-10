import { Component, OnInit } from '@angular/core';
import { Icon, icon, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent implements OnInit {

  private defaultIcon: Icon = icon({
    iconUrl: 'assets/leaflet/marker.png',
    iconSize: [20, 31],
  });
  
  public options = {
    layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        marker([ 46.879966, -121.726909 ], {icon: this.defaultIcon})
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  

  constructor() { }

  ngOnInit(): void {
  }

}
