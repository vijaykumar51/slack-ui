import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WorkspaceHomeComponent } from "./components/workspace-home/workspace-home.component";
import { WorkspaceTileNavigatorComponent } from "./components/workspace-tile-navigator/workspace-tile-navigator.component";
import { WorkspaceTileComponent } from "./components/workspace-tile/workspace-tile.component";
import { WorkspaceMenuComponent } from './components/workspace-menu/workspace-menu.component';
import { WorkspaceHeaderComponent } from './components/workspace-header/workspace-header.component';

@NgModule({
  declarations: [AppComponent, WorkspaceTileComponent, WorkspaceTileNavigatorComponent, WorkspaceHomeComponent, WorkspaceMenuComponent, WorkspaceHeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
