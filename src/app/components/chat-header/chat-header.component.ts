import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-chat-header",
  templateUrl: "./chat-header.component.html",
  styleUrls: ["./chat-header.component.styl"]
})
export class ChatHeaderComponent implements OnInit {
  public chatName: Observable<string>;
  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.chatName = this.activatedRouter.paramMap.pipe(map((paramMap) => paramMap.get("chatId")));
  }
}
