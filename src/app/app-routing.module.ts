import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesFailComponent } from './components/images-fail/images-fail.component';
import { ImagesGoodComponent } from './components/images-good/images-good.component';

const routes: Routes = [
  { path: '', component: ImagesFailComponent },
  { path: 'initial', component: ImagesFailComponent },
  { path: 'final', component: ImagesGoodComponent },
  { path: '**', component: ImagesFailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
