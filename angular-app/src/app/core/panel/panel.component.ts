import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: false,  
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']  
})
export class PanelComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() image: string = '';

  constructor() {}

  ngOnInit() {
    // Add any initialization logic here if needed
  }
}
