import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WorkspaceTileNavigatorComponent } from "./components/workspace-tile-navigator/workspace-tile-navigator.component";
import { WorkspaceTileComponent } from "./components/workspace-tile/workspace-tile.component";

@NgModule({
  declarations: [AppComponent, WorkspaceTileComponent, WorkspaceTileNavigatorComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
