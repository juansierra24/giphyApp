import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ModalOptions } from '../models/modal-options.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modal: ModalOptions = { show: false, index: 0 };
  private modalSubject: BehaviorSubject<ModalOptions> =
    new BehaviorSubject<ModalOptions>({} as ModalOptions);

  constructor() {}

  setModalOptions(options: ModalOptions) {
    if (
      this.modal.show !== options.show ||
      this.modal.index !== options.index
    ) {
      if (options.index > 19) {
        options.index = 0;
      } else if (options.index < 0) {
        options.index = 19;
      }

      this.modal.show = options.show;
      this.modal.index = options.index;
      this.modalSubject.next(this.modal);
    }
  }

  getShowModal() {
    return this.modalSubject.asObservable();
  }
}
