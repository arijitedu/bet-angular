import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LanderComponent } from "./lander/lander.component";

@NgModule({
  declarations: [AppComponent, LanderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, LanderComponent]
})
export class AppModule {}
