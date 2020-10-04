import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { WorkspaceTile } from "src/app/interfaces/workspace-tile";
import { WorkspaceService } from "src/app/services/workspace.service";

@Component({
  selector: "app-workspace-header",
  templateUrl: "./workspace-header.component.html",
  styleUrls: ["./workspace-header.component.styl"]
})
export class WorkspaceHeaderComponent implements OnInit {
  public workspaceId: Observable<string>;
  public workspaceInfo: Observable<WorkspaceTile>;
  constructor(private activatedRoute: ActivatedRoute, private workspaceService: WorkspaceService) {}

  ngOnInit(): void {
    this.workspaceInfo = this.activatedRoute.paramMap
      .pipe(map((paramMap) => paramMap.get("workspaceId")))
      .pipe(map((workspaceId) => this.workspaceService.getWorkspaceInfo(workspaceId)));
  }
}
