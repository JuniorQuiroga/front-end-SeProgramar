import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  contactsList:any;

  constructor(private datosPortfolio:PortfolioService) { }


  ngOnInit(): void {
    this.datosPortfolio.obtainData().subscribe(data => 
    {
      this.contactsList = data.personal.contacts;
    });
  }

}
