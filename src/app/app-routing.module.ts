import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatHomeComponent } from "./components/chat-home/chat-home.component";
import { WorkspaceHomeComponent } from "./components/workspace-home/workspace-home.component";

const routes: Routes = [
  {
    path: "workspace",
    children: [
      {
        path: ":workspaceId",
        component: WorkspaceHomeComponent,
        children: [
          {
            path: "announcement",
            children: [
              {
                path: ":chatId",
                component: ChatHomeComponent
              }
            ]
          },
          {
            path: "directMessage",
            children: [
              {
                path: ":chatId",
                component: ChatHomeComponent
              }
            ]
          }
        ]
      }
    ]
  }
  //   { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
