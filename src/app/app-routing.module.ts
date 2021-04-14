import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './nisyaa/forgot/forgot.component';
import { LoginComponent } from './nisyaa/login/login.component';
import { RegisterComponent } from './nisyaa/register/register.component';

const routes: Routes = [
  {
      path:'login',
      component:LoginComponent
  },
  {
      path:'register',
      component:RegisterComponent
  },
  {
		path:'admin',
  	loadChildren: ()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
	},
  {
    path:'forgot',
    component:ForgotComponent
  },
  {
		path:'public',
		loadChildren: ()=>import('./public/public.module').then(mod=>mod.PublicModule)
	},
  {
		path:'',
		pathMatch:'full',
		redirectTo:'/login'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
