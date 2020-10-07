import { Component, OnInit } from "@angular/core";
import editorSettings from "./editor-settings";

@Component({
  selector: "app-chat-input",
  templateUrl: "./chat-input.component.html",
  styleUrls: ["./chat-input.component.styl"]
})
export class ChatInputComponent implements OnInit {
  public editorSettings = editorSettings;
  public jsonDoc = {};
  constructor() {
    console.log(this.editorSettings);
  }

  ngOnInit(): void {}
}
