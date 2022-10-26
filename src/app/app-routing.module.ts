import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './core/demo/demo.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
/*   ,canActivate: [AuthGuardGuard] */
// {path:'carte/affichefinal/:id',component:Affiche2Component},

  {path:'core',loadChildren:()=>import ('./core/core.module').then( m=> m.CoreModule)},
  {path:'',loadChildren:()=>import ('./auth/auth.module').then( m=> m.AuthModule)},
  
  {path:'demo',component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
