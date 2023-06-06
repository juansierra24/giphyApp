import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-giphy-card',
  templateUrl: './giphy-card.component.html',
  styleUrls: ['./giphy-card.component.scss'],
})
export class GiphyCardComponent implements OnInit {
  @Input() url!: string;
  @Input() id!: number;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  showModal(event: any) {
    this.modalService.setModalOptions({ show: true, index: this.id });
  }
}
