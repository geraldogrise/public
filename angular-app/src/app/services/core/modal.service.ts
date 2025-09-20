import { Injectable } from "@angular/core";

@Injectable()
export default class ModalService {

    constructor() {}
    showModal(title: string, data: any, component: any) {
        /*const bsModalRef: BsModalRef = this.modalService.show(component);
        this.modalService.removeBackdrop();
        bsModalRef.content.title = title;
        bsModalRef.content.data = data;*/
    }
  }