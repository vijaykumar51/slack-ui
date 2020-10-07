import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { menu, NgxEditorModule, placeholder, schema } from "ngx-editor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatHeaderComponent } from "./components/chat-header/chat-header.component";
import { ChatHomeComponent } from "./components/chat-home/chat-home.component";
import { ChatInputComponent } from "./components/chat-input/chat-input.component";
import { ChatListComponent } from "./components/chat-list/chat-list.component";
import { MessageGroupComponent } from "./components/message-group/message-group.component";
import { MessageComponent } from "./components/message/message.component";
import { WorkspaceFiltersComponent } from "./components/workspace-filters/workspace-filters.component";
import { WorkspaceHeaderComponent } from "./components/workspace-header/workspace-header.component";
import { WorkspaceHomeComponent } from "./components/workspace-home/workspace-home.component";
import { WorkspaceMenuComponent } from "./components/workspace-menu/workspace-menu.component";
import { WorkspaceTileNavigatorComponent } from "./components/workspace-tile-navigator/workspace-tile-navigator.component";
import { WorkspaceTileComponent } from "./components/workspace-tile/workspace-tile.component";
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceTileComponent,
    WorkspaceTileNavigatorComponent,
    WorkspaceHomeComponent,
    WorkspaceMenuComponent,
    WorkspaceHeaderComponent,
    WorkspaceFiltersComponent,
    ChatListComponent,
    ChatHomeComponent,
    ChatInputComponent,
    MessageGroupComponent,
    MessageComponent,
    ChatHeaderComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxEditorModule.forRoot({
      schema,
      plugins: [
        menu({
          // default options (Optional)
          toolbar: [
            ["bold", "italic", "code"], // inline icons
            ["ordered_list", "bullet_list"],
            [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
            []
          ],
          labels: {
            bold: "Bold",
            italics: "Italics",
            code: "Code",
            ordered_list: "Ordered List",
            bullet_list: "Bullet List",
            heading: "Heading"
          }
        }),
        placeholder("Type something here...")
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
