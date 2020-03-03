import { Component, OnInit , TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import * as L from 'leaflet';

const dataMarkers = [
  { lat: 3.047268, long: 101.651001 },
  { lat: 4.072494, long: 101.975098 },
  { lat: 5.200365,  long: 100.898438 },
  { lat: 5.391805, long: 101.618042 },
  { lat: 4.36832,  long: 101.184082 }
]

@Component({
  selector: 'app-lake-list',
  templateUrl: './lake-list.component.html',
  styleUrls: ['./lake-list.component.scss']
})
export class LakeListComponent implements OnInit {

  leafletOptions = {
    layers: [
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          subdomains: 'abcd',
          maxZoom: 19
        }
      )
    ],
    zoom: 7,
    center: L.latLng(4.2105, 101.9758)
  };

  markerLayer: L.Layer[] = []

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.loadMarkers()
  }

  loadMarkers() {
    dataMarkers.forEach(
      (marker) => {
        this.markerLayer.push(
          L.marker(
            [marker.lat, marker.long],
            {
              icon: L.icon({
                iconSize: [35, 35],
                iconUrl: 'assets/img/marker/droplet.svg'
              })
            }
          )
        )
      }
    )
  }

  openDefaultModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

}
