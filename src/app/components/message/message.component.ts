import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.styl"]
})
export class MessageComponent implements OnInit {
  @Input() order: number;
  constructor() {}

  ngOnInit(): void {
    console.log("order =>", this.order);
  }
}
