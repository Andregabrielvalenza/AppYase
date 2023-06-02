import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro-detalle',
  templateUrl: './micro-detalle.page.html',
  styleUrls: ['./micro-detalle.page.scss'],
})
export class MicroDetallePage implements OnInit {
  public ocultar1: boolean = true;
  public ocultar2: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  accion1(){
    this.ocultar1 = !this.ocultar1;
    this.ocultar2 = false;
  }
  accion2(){
    this.ocultar2 = !this.ocultar2;
    this.ocultar1 = false;    
  }

}
