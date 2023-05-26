import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gustos-interes',
  templateUrl: './gustos-interes.page.html',
  styleUrls: ['./gustos-interes.page.scss'],
})
export class GustosInteresPage implements OnInit {
  isModalOpen = false;
  constructor() { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
