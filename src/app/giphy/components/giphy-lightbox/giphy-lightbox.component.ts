import { HttpServiceService } from 'src/app/services/http-service.service';
import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/models/gif.model';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-giphy-lightbox',
  templateUrl: './giphy-lightbox.component.html',
  styleUrls: ['./giphy-lightbox.component.scss'],
})
export class GiphyLightboxComponent implements OnInit {
  gifs!: Gif[];
  visible!: boolean;
  index!: number;

  constructor(
    private gifService: HttpServiceService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.gifService.getCurrentGifs().subscribe(gifsData => {
      this.gifs = gifsData.data;
    });
    this.modalService.getShowModal().subscribe(({ show, index }) => {
      this.visible = show;
      this.index = index;
    });
  }

  next() {
    this.modalService.setModalOptions({ show: true, index: this.index + 1 });
  }

  previous() {
    this.modalService.setModalOptions({ show: true, index: this.index - 1 });
  }
  close() {
    this.modalService.setModalOptions({ show: false, index: this.index });
  }
}
