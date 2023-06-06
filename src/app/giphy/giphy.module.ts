import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyRoutingModule } from './giphy-routing.module';
import { GiphySearchComponent } from './components/giphy-search/giphy-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { GiphyLayoutComponent } from './components/giphy-layout/giphy-layout.component';
import { GiphyCardComponent } from './components/giphy-card/giphy-card.component';
import { GiphyViewComponent } from './pages/giphy-view/giphy-view.component';
import { PaginatorModule } from 'primeng/paginator';
import { GiphyLightboxComponent } from './components/giphy-lightbox/giphy-lightbox.component';
@NgModule({
  declarations: [
    GiphySearchComponent,
    GiphyLayoutComponent,
    GiphyCardComponent,
    GiphyViewComponent,
    GiphyLightboxComponent,
  ],
  imports: [
    CommonModule,
    GiphyRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    PaginatorModule,
  ],
})
export class GiphyModule {}
