import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './ui/user-page/user-page.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { SuccessComponent } from './components/success/success.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  {path: "user/:id", component: UserPageComponent},
  {path: "success", component: SuccessComponent},
  {path: "", component:HomePageComponent},
  {path: "**", component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
