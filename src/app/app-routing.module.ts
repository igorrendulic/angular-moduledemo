import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './components/dash/dash.component';
import { AuthGuard } from './helpers/auth.guard';

const loginRegModule = () => import('./modules/loginandreg/loginandreg.module').then(x => x.LoginandregModule)

const routes: Routes = [
  {path: 'user', loadChildren: loginRegModule},
  {path: 'dash', component: DashComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/dash'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
