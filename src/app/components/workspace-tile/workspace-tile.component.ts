import { Component, Input, OnInit } from "@angular/core";
import { WorkspaceTile } from "src/app/interfaces/workspace-tile";

@Component({
  selector: "app-workspace-tile",
  templateUrl: "./workspace-tile.component.html",
  styleUrls: ["./workspace-tile.component.styl"]
})
export class WorkspaceTileComponent implements OnInit {
  @Input() tileInfo: WorkspaceTile;
  constructor() {}

  ngOnInit(): void {}
}
