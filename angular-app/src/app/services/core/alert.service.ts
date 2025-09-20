import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { AlertComponent } from '../../core/alert/alert.component';
import { AlertType } from '../../models/core/enums/AlertTyoe';

@Injectable({
  providedIn: 'root'
})
export default class AlertService {

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
    private resolver: ComponentFactoryResolver
  ) {}

  private showAlert(message: string, type: AlertType, dismissTimeout?: number) {
    const factory = this.resolver.resolveComponentFactory(AlertComponent);
    const componentRef = factory.create(this.injector);

    // Set the inputs
    componentRef.instance.type = type;
    componentRef.instance.message = message;

    // Attach the component to the view
    this.appRef.attachView(componentRef.hostView);

    // Get the DOM element and append it to the body
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    // Optionally dismiss the alert after the specified timeout
    if (dismissTimeout) {
      setTimeout(() => {
        this.removeAlert(componentRef);
      }, dismissTimeout);
    }
  }

  private removeAlert(componentRef: any) {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }

  showError(message: string) {
    this.showAlert(message, AlertType.DANGER, 3000);
  }

  showInfo(message: string) {
    this.showAlert(message, AlertType.INFO, 3000);
  }

  showSuccess(message: string) {
    this.showAlert(message, AlertType.SUCCESS, 3000);
  }

  showWarning(message: string) {
    this.showAlert(message, AlertType.WARNING, 3000);
  }
}
