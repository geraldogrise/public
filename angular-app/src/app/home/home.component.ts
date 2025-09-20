import { Component, OnInit } from '@angular/core';
import ConfirmService from '../services/core/confirm.service';
import { ToastType } from '../models/core/enums/ToastType';
import ToastService from '../services/core/toasr.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
    constructor()
    {

    }

    async ngOnInit(): Promise<void> {
    
    }
}
