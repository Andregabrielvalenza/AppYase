import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpenFiltro = false;
  isModalOpenMenu = false
  constructor() {}

  setOpenFiltro(isOpen: boolean) {
    this.isModalOpenFiltro = isOpen;
  }

  setOpenMenu(isOpen: boolean) {
    this.isModalOpenMenu = isOpen;
  }

}
