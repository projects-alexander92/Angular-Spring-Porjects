import {Component} from '@angular/core';
import {data} from '../../db/seed';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  articles: Array<object>;

  constructor() {
    this.articles = data;
  }
}
