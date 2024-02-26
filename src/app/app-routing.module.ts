import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NoaccessComponent } from './noaccess/noaccess.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'admin',
    component:AdminComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: '**',
    component:NoaccessComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
