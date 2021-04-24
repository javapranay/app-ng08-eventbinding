import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mousemove',
  templateUrl: './mousemove.component.html',
  styleUrls: ['./mousemove.component.css']
})
export class MousemoveComponent implements OnInit {
  public x: any;
  public y: any;

  constructor() { }

  ngOnInit(): void {
  }

  public animate(eventArgs: any) {
    this.x = eventArgs.clientX;
    this.y = eventArgs.clientY;
  }

  public setEffects() {
    let effects = {
      'position' : 'fixed',
      'top' : this.y + 'px',
      'left' : this.x + 'px'
    };
    return effects;
  }
}
