import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventDemoComponent } from './event-demo/event-demo.component';
import { MousemoveComponent } from './event-demo/mousemove/mousemove.component';
import { MouseEventComponent } from './event-demo/mouse-event/mouse-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDemoComponent,
    MousemoveComponent,
    MouseEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
