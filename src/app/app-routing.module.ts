import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'edit/:id', component: EditUserComponent },
  { path: 'add', component: AddUserComponent },
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
