import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-images-wide',
  templateUrl: './images-wide.component.html',
  styleUrls: ['./images-wide.component.scss']
})
export class ImagesWideComponent {

  public imgSrc: string = `../../../assets/${environment.version}/logo-wide.png`;
  public code: string = "{ height: 40px; }";

  constructor() { }
}
