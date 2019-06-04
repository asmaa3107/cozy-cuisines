import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  constructor(public auth: AuthService) {}
  profile: any;
   navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {
   /*   if (this.auth._userProfile) {
      this.profile = this.auth._userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }  */
  }
}
