//Importat los modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes que quiero usar como paginas
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphic1Component } from './pages/graphic1/graphic1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

//Arreglo de rutas
const appRoutes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'login',component: LoginComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'graphics1', component: Graphic1Component },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NopagefoundComponent }
 
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true}); //carga toda la configuracion de rutas
