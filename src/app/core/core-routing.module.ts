import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../guard/auth-guard.guard';
import { DetailComponent } from './compte/detail/detail.component';
import { ParametreComponent } from './compte/parametre/parametre.component';
import { FamilleComponent } from './famille/famille.component';
import { AfficheComponent } from './forms/cartevisite/affiche/affiche.component';
import { Affiche2Component } from './forms/cartevisite/affiche2/affiche2.component';
import { CartevisiteComponent } from './forms/cartevisite/cartevisite.component';
import { UpdatecarteComponent } from './forms/cartevisite/updatecarte/updatecarte.component';
import { FormsComponent } from './forms/forms.component';
import { AfficheMenuComponent } from './forms/menu/affiche-menu/affiche-menu.component';
import { MenuComponent } from './forms/menu/menu.component';
import { UpdateMenuComponent } from './forms/menu/update-menu/update-menu.component';
import { UpdateUrlComponent } from './forms/url/update-url/update-url.component';
import { UrlComponent } from './forms/url/url.component';
import { HomeComponent } from './home/home.component';
import { ListqrComponent } from './listqr/listqr.component';

const routes: Routes = [
  {path:'carte/affichefinal/:id',component:Affiche2Component},
  {path:'menu/affiche/:id',component:AfficheMenuComponent},

  
  {path:'',component:HomeComponent,children:[
    {path:'',component:FamilleComponent},
    {path:'form',component:FormsComponent},
    {path:'carte/affiche/:id',component:AfficheComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/update/:id',component:UpdateMenuComponent},
  {path:'list',component:ListqrComponent},
  {path:'carte',component:CartevisiteComponent},
  {path:'parametre',component:ParametreComponent},
  {path:'url',component:UrlComponent},
  {path:'url/updateurl/:id',component:UpdateUrlComponent},
  {path:'url/affiche/:id',component:UpdateUrlComponent},
  {path:'detail',component:DetailComponent},

  {path:'update/:id',component:UpdatecarteComponent}
    


],canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
