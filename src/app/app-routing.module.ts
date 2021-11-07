import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/register" },
  { path: "register", component: RegisterComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}