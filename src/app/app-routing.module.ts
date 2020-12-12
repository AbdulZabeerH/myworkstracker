import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { CalenderComponent } from "./calender/calender.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "",
    redirectTo:'home',
    pathMatch: 'full',
  },
  {
    path: "home", component: LandingComponent ,
    children: [
      { path: "", component: HomeComponent },
      {path:"dashboard",component:DashboardComponent},
      { path: "profile", component: ProfileComponent },
      { path: "aboutus", component: AboutusComponent },
      { path: "contactus", component: ContactusComponent },
      { path: "login", component: LoginComponent },
    ],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", component: CalenderComponent }
    ],
  },
];

// const routes: Routes = [
//   { path: '', redirectTo: 'lk/home', pathMatch: 'full' },
//   {
//     path: 'lk', component: LayoutComponent,
//     children: [
//       { path: 'home', component: HomeComponent},
//       { path: 'members', component: MembersComponent},
//       { path: 'addmember', component: AddMembersComponent},
//       { path: 'member', component: MemberComponent},
//     ]
//   }

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
