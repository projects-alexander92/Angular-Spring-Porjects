import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../components/user/loginForm/login.component';
import {RegisterComponent} from '../components/user/registerForm/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterGuard} from '../security/router.guard';
import {RouterGuardService} from '../security/router.guard.service';
import {CustomHttpInterceptor} from '../interceptors/http.interceptor';
import {LargeFormComponent} from '../components/user-alternative-form/user-alternative-form.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'form', component: LargeFormComponent, canActivate: [RouterGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [RouterGuard, RouterGuardService, {provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true}],
  declarations: [LoginComponent, RegisterComponent, LargeFormComponent],
  exports: [RouterModule]
})

export class AppRoutsModule {

}
