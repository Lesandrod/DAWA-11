import { Component } from '@angular/core';

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  },
  label: {
    color: string;
    text: string;
    fontSize: string;
    fontWeight: string;
  },
  title: string,
  info: string
};


@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})

export class TiendasComponent {
  
  mapOptions: google.maps.MapOptions = {
    center: { lat: -12.03581, lng: -76.958392 },
    zoom: 15,
    mapTypeControl: false
  };

  markers: MarkerProperties[] = [
    { position: { lat: -12.0491625, lng: -76.9554737 }, 
      label: { color: 'black', text: 'Tienda N°25', fontSize: '20px', fontWeight: 'bold' },
      title: 'ciudad',
      info: 'ciudad de los reyes'
       }, // Tecsup
    { position: { lat: -12.0331625, lng: -76.9554737 }, 
      label: { color: 'black', text: 'Tienda N°2', fontSize: '20px', fontWeight: 'bold'  },
      title: 'ciudad',
      info: 'ciudad de los reyes'
       }, // Tecsup }, // Louvre Museum
    { position: { lat: -12.0331625, lng: -76.9689937 }, 
      label: { color: 'black', text: 'Tienda N°3', fontSize: '20px', fontWeight: 'bold'  },
      title: 'ciudad',
      info: 'ciudad de los reyes'
       }, // Tecsup }, // Cathédrale Notre-Dame de Paris
  ];

  handleMapInitialized(map: google.maps.Map) {
    this.markers.forEach((marker: MarkerProperties) => {
      new google.maps.Marker({
        position: marker.position,
        label: marker.label,
        map,})
    });
  }

  verTiendas( distrito: string){

    if(distrito = 'Santa Anita'){
      this.verSantaAnita();
    }
    if(distrito = 'San Miguel'){
      this.verSanMiguel();
    }
    if(distrito = 'San Isidro'){
      this.verSanIsidro();
    }

  }
  
  verSantaAnita(){

  }

  verSanMiguel(){

  }

  verSanIsidro(){

  }

  

}
