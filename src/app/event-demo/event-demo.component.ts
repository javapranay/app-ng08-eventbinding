import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.css']
})
export class EventDemoComponent implements OnInit {
  public colorName: any;

  constructor() { }

  ngOnInit(): void {
  }

  public showAlert() {
    alert("Event Fired Up...");
  }

  public getColor(eventArgs: any) {
    if(eventArgs.clientX >= 1 && eventArgs.clientX <= 178) {
      this.colorName = 'red';
    }else if(eventArgs.clientX >= 184 && eventArgs.clientX <= 398) {
      this.colorName = 'green';
    }else if(eventArgs.clientX >= 404 && eventArgs.clientX <= 557) {
      this.colorName = 'blue';
    }
  }

  public setColor(): any{
    let color = {
      'color': this.colorName
    };
  }
}
