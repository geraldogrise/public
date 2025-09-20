import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: false,
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() route : string = "";
  lastUrl : string | undefined = "";
  urlList: Array<string> = new Array<string> ();
  constructor() { }

  ngOnInit() {
     if(this.route){
        this.urlList =  this.route.split("/");
        this.lastUrl = this.urlList.pop();
     }
  }
}
