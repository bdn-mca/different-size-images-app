import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-images-base',
  templateUrl: './images-base.component.html',
  styleUrls: ['./images-base.component.scss']
})
export class ImagesBaseComponent {

  @Input() code!: string;
  @Input() imgSrc!: string;

  public title: string;
  public subtitle: string;
  public content: string;

  constructor() {
    if (environment.version === 'v1') {
      this.title = environment.v1.title;
      this.subtitle = environment.v1.subtitle;
      this.content = environment.v1.content;
    }
    else {
      this.title = environment.v2.title;
      this.subtitle = environment.v2.subtitle;
      this.content = environment.v2.content;
    }
  }
}
