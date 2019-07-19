import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public displayMessage: string;
  public clickMe: string = "Click Me!";
  public heroes: string[] = ["sunny","preeti","harvi","ronak"];
  public totalEstimate: number = 10;
  public ctx: any = {
    estimate: this.totalEstimate
  };

  @ViewChild('defaultTabButtons')
  private defaultTabButtonsTpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    console.log(1111);
    console.log(this.defaultTabButtonsTpl);
  }

  public onClick(): void {
    this.displayMessage = "Hey, there!";
    console.log("Login");
  }

}
