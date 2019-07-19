import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {

  @Input()
    headerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
