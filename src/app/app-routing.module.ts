import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: ""
  },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(e => e.DashboardModule)
  },
  {
    path: "profile",
    loadChildren: () => import("./profile/profile.module").then(e => e.ProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
