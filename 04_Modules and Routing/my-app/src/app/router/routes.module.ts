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
import {AttackMenuComponent} from '../components/attack-menu/attack-menu.component';
import {AttackVisualisationComponent} from '../components/attack-visualisation/attack-visualisation.component';
import {AttackErrorComponent} from '../components/attack-error/attack-error.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'attack', component: AttackMenuComponent, canActivate: [RouterGuard]},
  {path: 'attack-faction/:name', component: AttackVisualisationComponent, canActivate: [RouterGuard]},
  {path: 'attack-faction/error/explain', component: AttackErrorComponent}
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
  providers: [
    RouterGuard,
    RouterGuardService,
    {provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true}],
  declarations: [LoginComponent, RegisterComponent, AttackMenuComponent, AttackVisualisationComponent, AttackErrorComponent],
  exports: [RouterModule]
})

export class AppRoutsModule {

}
