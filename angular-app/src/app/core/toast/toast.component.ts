import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: false,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {

  @Input() title: string = "";
  @Input() message: string = ""
  @Input() time: string = ""
  @Input() type: string = ""
  @Input() icon: string = ""
  timeout: number = 4;
  @Output() closed = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.onClose();
    }, this.timeout * 1000);
  }

  onClose() {
    this.closed.emit(); 
  }
}
