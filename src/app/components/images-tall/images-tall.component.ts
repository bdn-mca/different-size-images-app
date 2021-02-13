import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-images-tall',
  templateUrl: './images-tall.component.html',
  styleUrls: ['./images-tall.component.scss']
})
export class ImagesTallComponent {

  public imgSrc: string = `../../../assets/${environment.version}/logo-tall.png`;
  public code: string = "{ width: 40px; }";

  constructor() { }
}
