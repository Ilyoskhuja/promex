import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Material } from './material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TreeModule } from '@circlon/angular-tree-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FormsModule } from '@angular/forms';
import { DialogOverviewExampleDialog } from './auth/authDialog';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    DialogOverviewExampleDialog,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    Material,
    FormsModule,
    TreeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
