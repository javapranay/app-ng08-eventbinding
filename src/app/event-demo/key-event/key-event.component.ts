import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-event',
  templateUrl: './key-event.component.html',
  styleUrls: ['./key-event.component.css']
})
export class KeyEventComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  // Character codes
  public keyCode: any;
  public charCode: any;
  public which: any;
  public shift: any;
  public getCodes(eventArgs: KeyboardEvent) {
    this.keyCode = eventArgs.keyCode;
    this.charCode = eventArgs.charCode;
    this.which = eventArgs.which;
    this.shift = eventArgs.shiftKey;
  }

  // Key Events
  public userData = [
    {userId: 'john'},
    {userId: 'john123'},
    {userId: 'john1234'},
    {userId: 'david'}
  ];
  public userId: any;
  public pwd: any;
  public regExp: any = /(?=.*[a-z]\w{4,15})/;
  public msgUserId: any;
  public msgPwd: any;
  public min: any;
  public max: any;
  public value: any;
  public low: any;
  public high: any;
  
  public checkUserId(eventArgs: KeyboardEvent) {
    if(eventArgs.keyCode >= 65 && eventArgs.keyCode <= 90) {
      this.msgUserId = "Warn: Caps is ON..."
    } else {
      for(let i=0; i<this.userData.length; i++) {
        if(this.userData[i].userId == this.userId) {
          this.msgUserId = 'User id already taken - Try another.';
          return;
        } else {
          this.msgUserId = 'User id is Available.';
        }
      }
    
    }
  }

  public getGrade(min: number, max: number, value: number, low: number, high: number) {
    this.min = min;
    this.max = max;
    this.value = value;
    this.low = low;
    this.high = high;
  }

  public checkPassword(eventArgs: KeyboardEvent) {
    if(this.pwd.match(this.regExp)) {
      this.msgPwd = "Strong password";
      this.getGrade(1, 10, 10, 0, 0);
    } else {
      if(this.pwd.length < 4) {
        this.msgPwd = "Poor Password";
        this.getGrade(1, 10, 10, 4, 8);
      }
    }
  }
}
