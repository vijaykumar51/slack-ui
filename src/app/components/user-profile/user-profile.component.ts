import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.styl"]
})
export class UserProfileComponent implements OnInit {
  public showProfileTile = false;
  constructor() {}

  ngOnInit(): void {}
}
