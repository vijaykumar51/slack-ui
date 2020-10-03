import { Component, OnInit } from "@angular/core";
import { WorkspaceTile } from "../../interfaces/workspace-tile";

@Component({
  selector: "app-workspace-tile-navigator",
  templateUrl: "./workspace-tile-navigator.component.html",
  styleUrls: ["./workspace-tile-navigator.component.styl"]
})
export class WorkspaceTileNavigatorComponent implements OnInit {
  public workspaceTiles: Array<WorkspaceTile> = [];
  constructor() {}

  ngOnInit(): void {
    this.workspaceTiles.push({
      workspaceId: "wsp1",
      workspaceDisplayName: "BlackRock",
      workspaceImageSrc: "https://api.adorable.io/avatars/65/slackui-wsp1.png"
    });
    this.workspaceTiles.push({
      workspaceId: "wsp2",
      workspaceDisplayName: "Bamboo",
      workspaceImageSrc: "https://api.adorable.io/avatars/65/slackui-wsp2.png"
    });
    this.workspaceTiles.push({
      workspaceId: "wsp3",
      workspaceDisplayName: "System Design",
      workspaceImageSrc: "https://api.adorable.io/avatars/65/slackui-wsp3.png"
    });
  }
}
