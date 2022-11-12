import { Component, OnInit } from '@angular/core';
import { IDesarrollo } from 'src/app/interfaces/desarrollo.interface';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss', './../../app.component.scss']
})
export class ElectronicsComponent implements OnInit {

  public desarrollos: IDesarrollo [] = [
    {
      title: 'Salware Education Sl',
      description: 'Desarrollo de plataforma eduvativa en Java, Spring Boot, Angular +8',
      image: 'salware.png'
    },
    {
      title: 'Gestion de Reservas Bar',
      description: 'Gestionar reservas desde aplicacion Web utilizando el framework de Angular +13',
      image: 'reservas.png'
    },{
      title: 'Salware Education Sl',
      description: 'Desarrollo de plataforma eduvativa en Java, Spring Boot, Angular +8',
      image: 'salware.png'
    },
    {
      title: 'Gestion de Reservas Bar',
      description: 'Gestionar reservas desde aplicacion Web utilizando el framework de Angular +13',
      image: 'reservas.png'
    },
    
    {
      title: 'Gestion de Reservas Bar',
      description: 'Gestionar reservas desde aplicacion Web utilizando el framework de Angular +13',
      image: 'reservas.png'
    },
    
    {
      title: 'Gestion de Reservas Bar',
      description: 'Gestionar reservas desde aplicacion Web utilizando el framework de Angular +13',
      image: 'reservas.png'
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
