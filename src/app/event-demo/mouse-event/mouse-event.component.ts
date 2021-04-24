import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent implements OnInit {
  public picSrc = 'assets/coc-pepsi.jpg';
  public bulb = 'assets/bulb-off.png';

  constructor() { }

  ngOnInit(): void {
  }

  public ad1() {
    this.picSrc = 'assets/fruitjuice.jpg';
  }

  public ad2() {
    this.picSrc = 'assets/coc-pepsi.jpg';
  }

  public on() {
    this.bulb = 'assets/bulb-on.png'
  }

  public off() {
    this.bulb = 'assets/bulb-off.png';
  }
}
