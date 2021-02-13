import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-images-tall-fix',
  templateUrl: './images-tall-fix.component.html',
  styleUrls: ['./images-tall-fix.component.scss']
})
export class ImagesTallFixComponent {

  public imgSrc: string = `../../../assets/${environment.version}/logo-tall.png`;
  public code: string = "{ height: 40px; }";

  constructor() { }
}
