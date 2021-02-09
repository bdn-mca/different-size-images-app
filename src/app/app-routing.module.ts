import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesFailComponent } from './components/images-fail/images-fail.component';
import { ImagesGoodComponent } from './components/images-good/images-good.component';
import { ImagesTallFixComponent } from './components/images-tall-fix/images-tall-fix.component';
import { ImagesTallComponent } from './components/images-tall/images-tall.component';
import { ImagesWideComponent } from './components/images-wide/images-wide.component';

const routes: Routes = [
  { path: '', component: ImagesFailComponent },
  { path: 'initial', component: ImagesFailComponent },
  { path: 'tall', component: ImagesTallComponent },
  { path: 'tall-fix', component: ImagesTallFixComponent },
  { path: 'wide', component: ImagesWideComponent },
  { path: 'final', component: ImagesGoodComponent },
  { path: '**', component: ImagesFailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
