import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiryanisComponent } from './biryanis/biryanis.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SignupComponent } from './signup/signup.component';
import { TiffinsComponent } from './tiffins/tiffins.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'tiffins',component:TiffinsComponent},
  {path:'biryanis',component:BiryanisComponent},
  {path:'orders',component:OrdersComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'footer',component:FooterComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'recipes',component:RecipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
