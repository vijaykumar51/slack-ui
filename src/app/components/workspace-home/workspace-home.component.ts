import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-workspace-home",
  templateUrl: "./workspace-home.component.html",
  styleUrls: ["./workspace-home.component.styl"]
})
export class WorkspaceHomeComponent implements OnInit {
  public workspaceId: Observable<string>;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.workspaceId = this.activatedRoute.paramMap.pipe(map((paramMap) => paramMap.get("workspaceId")));
    this.workspaceId.subscribe((id) => console.log(id));
  }
}
