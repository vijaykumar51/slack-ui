import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-message-group",
  templateUrl: "./message-group.component.html",
  styleUrls: ["./message-group.component.styl"]
})
export class MessageGroupComponent implements OnInit {
  @Input() order: number;
  constructor() {}

  ngOnInit(): void {}
}
