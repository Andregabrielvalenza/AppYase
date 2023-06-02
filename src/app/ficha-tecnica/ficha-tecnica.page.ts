import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha-tecnica',
  templateUrl: './ficha-tecnica.page.html',
  styleUrls: ['./ficha-tecnica.page.scss'],
})
export class FichaTecnicaPage implements OnInit {
  public ocultar1: boolean = true;
  public ocultar2: boolean = false;
  isModalOpen = false;
  constructor() { }

  ngOnInit() {
  }

  accion1(){
    this.ocultar2 = !this.ocultar2;
    this.ocultar1 = false;
  }
  accion2(){
    this.ocultar1 = !this.ocultar1;
    this.ocultar2 = false;    
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
