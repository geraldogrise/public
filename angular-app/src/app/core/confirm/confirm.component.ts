import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm',
  standalone: false,
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  @Input() title: string = "";
  @Input() message: string = "";
  @Input() cancelText = 'Cancel';
  @Input() okText = 'Confirm';

  confirmResult: Subject<boolean> = new Subject<boolean>();
  @Output() confirmed = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
    this.confirmResult = new Subject();
  }

  onConfirm() {
    this.confirmed.emit(true);
  }

  onClose() {
    this.confirmed.emit(false);
  }
}
