import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'aricle-root',
  templateUrl: './article.component.html'
})

export class Article implements OnChanges, OnInit {

  @Input() article: object;
  text: string;
  author: string;
  title: string;
  link: string;
  id: number;
  showLink: boolean;
  showText: boolean;
  showLinkButtonText: string;
  showTextButtonText: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(model) {
    console.log(this.article);
    console.log('onchanges');
    const article = model.article.currentValue;
    this.id = article.id;
    this.text = article.text;
    this.author = article.author;
    this.title = article.title;
    this.link = article.link;
    this.showLink = false;
    this.showText = false;
    this.showLinkButtonText = 'Show Image';
    this.showTextButtonText = 'Show Description';
  }

  changeButtonState(ev) {
    switch (ev.target.innerText) {
      case 'Show Image':
        this.showLinkButtonText = 'Hide Image';
        this.showLink = !this.showLink;
        break;
      case 'Show Description':
        this.showTextButtonText = 'Hide Description';
        this.showText = !this.showText;
        break;
      case 'Hide Image':
        this.showLinkButtonText = 'Show Image';
        this.showLink = !this.showLink;
        break;
      case 'Hide Description':
        this.showTextButtonText = 'Show Description';
        this.showText = !this.showText;
        break;
    }
  }
}
