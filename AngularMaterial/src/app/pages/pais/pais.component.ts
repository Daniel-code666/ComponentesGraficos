import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  constructor() { }

  public imageObject: Array<object> = [
    {
      image: 'assets/medellin.jpg',
      thumbImage: 'assets/medellin.jpg',
      alt: 'Medellín',
      title: 'Metro de Medellín'
    },
    {
      image: 'assets/sunsetinChocó.jpg',
      thumbImage: 'assets/sunsetinChocó.jpg',
      alt: 'Chocó',
      title: 'Chocó'
    },
    {
      image: 'assets/valle.jpg',
      thumbImage: 'assets/valle.jpg',
      alt: 'Valle',
      title: 'Valle'
    },
    {
      image: 'assets/selva.jpg',
      thumbImage: 'assets/selva.jpg',
      alt: 'Selva',
      title: 'Selva'
    },
    {
      image: 'assets/Santuario-Nacional-de-Las-Lajas.jpg',
      thumbImage: 'assets/Santuario-Nacional-de-Las-Lajas.jpg',
      alt: 'Santiario de las Lajas',
      title: 'Santuario de las Lajas'
    },
    {
      image: 'assets/monserrate.jpg',
      thumbImage: 'assets/monserrate.jpg',
      alt: 'Monserrate',
      title: 'Monserrate'
    },
    {
      image: 'assets/medellin2.jpg',
      thumbImage: 'assets/medellin2.jpg',
      alt: 'Medallo papá',
      title: 'Medellín'
    },
    {
      image: 'assets/guatape.jpg',
      thumbImage: 'assets/guatape.jpg',
      alt: 'Güatapé',
      title: 'Güatapé'
    },
    {
      image: 'assets/guajira.jpg',
      thumbImage: 'assets/guajira.jpg',
      alt: 'La Güajira',
      title: 'La Güajira'
    },
    {
      image: 'assets/frailejon.jpg',
      thumbImage: 'assets/frailejon.jpg',
      alt: 'Frailejón',
      title: 'Frailejón'
    },
    {
      image: 'assets/cocora.jpg',
      thumbImage: 'assets/cocora.jpg',
      alt: 'Valle del Cocora',
      title: 'Valle del Cocora'
    },
    {
      image: 'assets/tatacoa.jpg',
      thumbImage: 'assets/tatacoa.jpg',
      alt: 'Desierto de la Tatacoa',
      title: 'Desierto de la Tatacoa'
    }
  ];

  ngOnInit(): void {
  }

}
