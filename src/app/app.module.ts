import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { ProductListComponent } from './core/components/product/product-list/product-list.component';
import { ProductDetailsComponent } from './core/components/product/product-details/product-details.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LoginSignupComponent } from './core/components/auth/login-signup/login-signup.component';
import { ResetComponent } from './core/components/auth/reset/reset.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProductListComponent,
    ProductDetailsComponent,
    NavbarComponent,
    FooterComponent,
    LoginSignupComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
