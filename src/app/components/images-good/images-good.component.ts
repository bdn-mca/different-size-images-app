import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-images-good',
  templateUrl: './images-good.component.html',
  styleUrls: ['./images-good.component.scss']
})
export class ImagesGoodComponent {

  public imgSrc: string = `../../../assets/${environment.version}/logo-wide-final.png`;
  public code: string = '{ width: 40px; height: 40px: object-fit: contain; }';

  constructor() { }
}
