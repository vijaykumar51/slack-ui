import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.styl"]
})
export class ChatListComponent implements OnInit {
  @Input() chatListName: string;
  public listExpanded = true;
  constructor() {}

  ngOnInit(): void {}
}
