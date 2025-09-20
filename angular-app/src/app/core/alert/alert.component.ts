import { Component, Input } from '@angular/core';
import { AlertType } from '../../models/core/enums/AlertTyoe';


@Component({
  selector: 'app-alert',
  standalone: false,
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    @Input() type = AlertType.SUCCESS;
    @Input() message: string = "";

    constructor() { }

    ngOnInit() {
    }

    onClose() {
      const alertElement = document.querySelector('.alert');
      if (alertElement) {
        alertElement.classList.add('fade-out'); 
        setTimeout(() => alertElement?.classList.add('d-none'), 300); 
      }
    }
}
