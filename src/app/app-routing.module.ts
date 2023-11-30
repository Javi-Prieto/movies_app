import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './ui/user-page/user-page.component';
import { HomePageComponent } from './ui/home-page/home-page.component';

const routes: Routes = [
  {path: "user/:id", component: UserPageComponent},
  {path: "", component:HomePageComponent},
  {path: "**", component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
