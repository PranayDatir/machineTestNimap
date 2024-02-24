import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: 'full' 
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "register", component: RegistrationComponent
  },
  {
    path: "profile", component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
