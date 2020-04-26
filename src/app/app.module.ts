import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

// extra added Modules
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'admin',
        component : AdminComponent,
        canActivate : [AuthGuard]
      },
      {
        path : '',
        component : HomeComponent,
      }
    ])
  ],
  providers: [AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
