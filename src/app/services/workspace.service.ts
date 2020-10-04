import { Injectable } from "@angular/core";
import { WorkspaceTile } from "../interfaces/workspace-tile.js";
import * as workspaceMockResponse from "../mock-response/mock-workspaces.json";

@Injectable({
  providedIn: "root"
})
export class WorkspaceService {
  constructor() {}

  getWorkspaces(): Array<WorkspaceTile> {
    return (workspaceMockResponse as any).default;
  }

  getWorkspaceInfo(workspaceId: string): WorkspaceTile {
    return this.getWorkspaces().find((workspace) => workspace.workspaceId === workspaceId);
  }
}
