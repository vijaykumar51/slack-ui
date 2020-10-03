import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkspaceHomeComponent } from "./components/workspace-home/workspace-home.component";

const routes: Routes = [
  {
    path: "workspace",
    children: [
      {
        path: ":workspaceId",
        component: WorkspaceHomeComponent
      }
    ]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
