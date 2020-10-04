import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WorkspaceHomeComponent } from "./components/workspace-home/workspace-home.component";
import { WorkspaceTileNavigatorComponent } from "./components/workspace-tile-navigator/workspace-tile-navigator.component";
import { WorkspaceTileComponent } from "./components/workspace-tile/workspace-tile.component";
import { WorkspaceMenuComponent } from './components/workspace-menu/workspace-menu.component';
import { WorkspaceHeaderComponent } from './components/workspace-header/workspace-header.component';
import { WorkspaceFiltersComponent } from './components/workspace-filters/workspace-filters.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatHomeComponent } from './components/chat-home/chat-home.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';

@NgModule({
  declarations: [AppComponent, WorkspaceTileComponent, WorkspaceTileNavigatorComponent, WorkspaceHomeComponent, WorkspaceMenuComponent, WorkspaceHeaderComponent, WorkspaceFiltersComponent, ChatListComponent, ChatHomeComponent, ChatInputComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
