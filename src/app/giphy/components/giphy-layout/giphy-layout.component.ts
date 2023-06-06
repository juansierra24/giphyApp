import { Component, OnInit, Input } from '@angular/core';
import { Gif } from 'src/app/models/gif.model';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-giphy-layout',
  templateUrl: './giphy-layout.component.html',
  styleUrls: ['./giphy-layout.component.scss'],
})
export class GiphyLayoutComponent {
  @Input() gifs!: Gif[];

  constructor() {}
}
