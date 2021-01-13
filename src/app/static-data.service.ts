import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StaticDataService {
  menuList = [
    {
      menu: "Home",
      link: "",
    },
    {
      menu: "Dashboard",
      link: "/home/dashboard",
    },
    {
      menu: "Profile",
      link: "/home/profile",
    },
    {
      menu: "About Me",
      link: "/home/aboutus",
    },
    {
      menu: "Contact Me",
      link: "/home/contactus",
    },
    {
      menu: "Login / SignUp",
      link: "/home/login",
    },
  ];
  hideStaticPages=true;
  isLoggedIn=false;
  constructor() {
  }
}
