import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector, ComponentRef } from "@angular/core";
import { ToastType } from "../../models/core/enums/ToastType";
import { ToastComponent } from "../../core/toast/toast.component";


@Injectable({
  providedIn: 'root'
})
export default class ToastService {
  private toastRefs: ComponentRef<ToastComponent>[] = [];

  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  showToast(title: string, message: string, time: string, type: ToastType) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ToastComponent);
    const componentRef = factory.create(this.injector);

    componentRef.instance.title = title;
    componentRef.instance.message = message;
    componentRef.instance.timeout = parseInt(time, 10) || 4; 
    componentRef.instance.type = type;
    componentRef.instance.icon = this.getIcon(type);

    componentRef.instance.closed.subscribe(() => {
      this.removeToast(componentRef);
    });

    this.appRef.attachView(componentRef.hostView);
    document.body.appendChild(componentRef.location.nativeElement);
    this.toastRefs.push(componentRef);
  }

  private removeToast(toast: ComponentRef<ToastComponent>) {
    this.appRef.detachView(toast.hostView);
    toast.destroy();
    this.toastRefs = this.toastRefs.filter(t => t !== toast);
  }

  getIcon(type: ToastType): string {
    switch (type) {
      case ToastType.DANGER: return "fa fa-exclamation-circle";
      case ToastType.INFO: return "fa fa-info-circle";
      case ToastType.SUCCESS: return "fa fa-check-circle";
      case ToastType.WARNING: return "fa fa-exclamation-triangle";
      default: return "";
    }
  }
}
