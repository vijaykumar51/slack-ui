import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-workspace-header",
  templateUrl: "./workspace-header.component.html",
  styleUrls: ["./workspace-header.component.styl"]
})
export class WorkspaceHeaderComponent implements OnInit {
  public workspaceId: Observable<string>;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.workspaceId = this.activatedRoute.paramMap.pipe(map((paramMap) => paramMap.get("workspaceId")));
  }
}
