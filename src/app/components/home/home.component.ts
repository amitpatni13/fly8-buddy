import { Component } from '@angular/core';
import { IATACityCodeModel, IATAFlightDetailsModel } from 'src/app/models/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  IATAflightDetails: IATAFlightDetailsModel[] = [
    {
      IATACode: 'IB',
      name: 'Iberia',
      price: 10
    },{
      IATACode: 'BA',
      name: 'British Airways',
      price: 15
    },{
      IATACode: 'LH',
      name: 'Lufthansa',
      price: 7
    },{
      IATACode: 'FR',
      name: 'Ryanair',
      price: 20
    },{
      IATACode: 'VY',
      name: 'Vueling',
      price: 10
    },{
      IATACode: 'TK',
      name: 'Turkish Airlines',
      price: 5
    },{
      IATACode: 'U2',
      name: 'Easyjet',
      price: 19.9
    }
  ];
  IATACityCodes: IATACityCodeModel[] = [
    {
      IATACode: 'MAD',
      city: 'Madrid'
    },{
      IATACode: 'BCN',
      city: 'Barcelona'
    },{
      IATACode: 'LHR',
      city: 'London'
    },{
      IATACode: 'CDG',
      city: 'Paris'
    },{
      IATACode: 'FRA',
      city: 'Frankfurt'
    },{
      IATACode: 'IST',
      city: 'Istanbul'
    },{
      IATACode: 'AMS',
      city: 'Amsterdam'
    },{
      IATACode: 'FCO',
      city: 'Rome'
    },{
      IATACode: 'CPH',
      city: 'Copenhagen'
    }
  ]

}
