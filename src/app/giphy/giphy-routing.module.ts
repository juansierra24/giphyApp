import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyViewComponent } from './pages/giphy-view/giphy-view.component';

const routes: Routes = [
  {
    path: '',
    component: GiphyViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiphyRoutingModule {}
