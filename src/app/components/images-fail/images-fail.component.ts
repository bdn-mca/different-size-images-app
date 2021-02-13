import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-images-fail',
  templateUrl: './images-fail.component.html',
  styleUrls: ['./images-fail.component.scss']
})
export class ImagesFailComponent {

  public code: string = '{ width: 40px }';
  public imgSrc: string = `../../../assets/${environment.version}/logo-1.png`;

  constructor() { }
}
