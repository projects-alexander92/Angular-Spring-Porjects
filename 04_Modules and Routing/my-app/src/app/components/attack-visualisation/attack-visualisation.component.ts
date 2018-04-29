import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './attack-visualisation.component.html'
})
export class AttackVisualisationComponent {
  factionName: string;
  constructor(private route: ActivatedRoute) {
    this.factionName = this.route.snapshot.params['name'];
  }
}
