import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { ProductListComponent } from './core/components/product/product-list/product-list.component';
import { ProductDetailsComponent } from './core/components/product/product-details/product-details.component';
import { LoginSignupComponent } from './core/components/login-signup/login-signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
    
  },
   {
    path: 'products/:id',
    component: ProductDetailsComponent
  },
    {
    path: 'login',
    component: LoginSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
