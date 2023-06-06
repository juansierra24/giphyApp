import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'giphy', pathMatch: 'full'},
  {
    path: 'giphy',
    loadChildren: () => import('./giphy/giphy.module').then(m => m.GiphyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
