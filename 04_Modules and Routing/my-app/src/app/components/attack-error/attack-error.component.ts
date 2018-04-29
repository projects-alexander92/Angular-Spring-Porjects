import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './attack-error.component.html'
})
export class AttackErrorComponent implements OnInit {
  factionName: string;

  constructor() {

  }

  ngOnInit(): void {
    this.factionName = sessionStorage.getItem('faction');
  }

}
