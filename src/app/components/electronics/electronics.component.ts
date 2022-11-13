import { Component, OnInit } from '@angular/core';
import { IDesarrollo } from 'src/app/interfaces/desarrollo.interface';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss', './../../app.component.scss']
})
export class ElectronicsComponent implements OnInit {

  public desarrollos!: IDesarrollo [];


  constructor() { }

  ngOnInit(): void {
  }

}
