import { Component, OnInit } from "@angular/core";
import { WorkspaceService } from "src/app/services/workspace.service";
import { WorkspaceTile } from "../../interfaces/workspace-tile";

@Component({
  selector: "app-workspace-tile-navigator",
  templateUrl: "./workspace-tile-navigator.component.html",
  styleUrls: ["./workspace-tile-navigator.component.styl"]
})
export class WorkspaceTileNavigatorComponent implements OnInit {
  public workspaceTiles: Array<WorkspaceTile> = [];
  constructor(private workspaceService: WorkspaceService) {}

  ngOnInit(): void {
    this.workspaceTiles = this.workspaceService.getWorkspaces();
  }
}
