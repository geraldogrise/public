import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/core/auth.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { CoreModule } from './core/core.module';
import ModalService from './services/core/modal.service';
import { InterceptorModule } from './shared/interceptor/interceptor.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    InterceptorModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    CoreModule,
    AppRoutingModule,
    RouterModule  
  ],
  providers: [
    AuthGuard,
    AuthService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
