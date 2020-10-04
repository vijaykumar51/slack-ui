import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ChatItem } from "src/app/interfaces/chat-item";

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.styl"]
})
export class ChatListComponent implements OnInit {
  @Input() chatListName: string;
  public listExpanded = true;

  public chatListItems: Array<ChatItem> = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.chatListItems.push({ type: "open-group", itemId: "employees", displayName: "Employees" });
    this.chatListItems.push({ type: "open-group", itemId: "holidays", displayName: "Holidays" });
    this.chatListItems.push({ type: "private-group", itemId: "calProject", displayName: "Calculation Project" });
    this.chatListItems.push({ type: "open-group", itemId: "hackathon", displayName: "Hackathon" });
    this.chatListItems.push({ type: "private-group", itemId: "release", displayName: "Release" });
  }

  ngOnInit(): void {}

  openChat(chatItemId: string): void {
    this.router.navigate([this.chatListName, chatItemId], { relativeTo: this.activatedRoute });
  }
}
