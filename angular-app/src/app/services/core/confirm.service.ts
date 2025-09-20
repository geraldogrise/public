import { Injectable, ComponentRef, ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { ConfirmComponent } from '../../core/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export default class ConfirmService {
  private componentRef?: ComponentRef<ConfirmComponent>;

  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  showConfirm(title: string, message: string, okText: string, cancelText: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.componentRef) {
        this.removeConfirm();
      }

      const factory = this.componentFactoryResolver.resolveComponentFactory(ConfirmComponent);
      this.componentRef = factory.create(this.injector);

      this.componentRef.instance.title = title;
      this.componentRef.instance.message = message;
      this.componentRef.instance.okText = okText;
      this.componentRef.instance.cancelText = cancelText;

      this.componentRef.instance.confirmed.subscribe((result: boolean) => {
        resolve(result);
        this.removeConfirm();
      });

      this.appRef.attachView(this.componentRef.hostView);
      document.body.appendChild(this.componentRef.location.nativeElement);
    });
  }

  private removeConfirm() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = undefined;
    }
  }
}
