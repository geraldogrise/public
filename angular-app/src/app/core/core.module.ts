import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelComponent } from './panel/panel.component';
import { ToastComponent } from './toast/toast.component';
import AlertService from '../services/core/alert.service';
import ToastService from '../services/core/toasr.service';
import ModalService from '../services/core/modal.service';
import ConfirmService from '../services/core/confirm.service';
import { FormsModule } from '@angular/forms';
import { PaginationService } from '../services/core/pagination.service';



@NgModule({
  declarations: [
    AlertComponent,
    BreadcrumbComponent,
    ConfirmComponent,
    PaginationComponent,
    PanelComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    AlertComponent,
    BreadcrumbComponent,
    ConfirmComponent,
    PaginationComponent,
    PanelComponent,
    ToastComponent
  ],
  providers: [ 
    AlertService,
    ConfirmService,
    ModalService,
    PaginationService,
    ToastService
   
  ]
})
export class CoreModule { }
