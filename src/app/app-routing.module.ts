import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponentComponent } from './components/demo-component/demo-component.component';
import { DataPassingComponent } from './components/data-passing/data-passing.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'demo',component:DemoComponentComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dataSharing',component:DataPassingComponent
  },
  {
    path:'data-binding',component:DataBindingComponent
  },
  {
    path:'', redirectTo:'login',pathMatch:'full'
  },
  {
    path:'**', component:ErrorComponentComponent,pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
