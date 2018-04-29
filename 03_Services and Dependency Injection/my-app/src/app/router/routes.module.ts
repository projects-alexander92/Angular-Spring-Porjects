import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../components/user/loginForm/login.component';
import {RegisterComponent} from '../components/user/registerForm/register.component';
import {PokemonComponent} from '../components/pokemon/pokemon.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterGuard} from '../security/router.guard';
import {RouterGuardService} from '../security/router.guard.service';
import {CustomHttpInterceptor} from '../interceptors/http.interceptor';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pokemon', component: PokemonComponent, canActivate: [RouterGuard]}
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
  declarations: [LoginComponent, RegisterComponent, PokemonComponent],
  exports: [RouterModule]
})

export class AppRoutsModule {

}
