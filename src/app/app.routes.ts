import { Routes } from '@angular/router';
import { NintendoService } from './services/nintendo.service';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'listado', pathMatch:'full'},
    {
        path:'listado',
         providers:[NintendoService],
         //canActivate:[authGuard],
         canMatch:[authGuard],
         loadComponent: ()=>import('./pages/listado/listado.component').then(comp=>comp.ListadoComponent)
    },

    {
        path:'details/:id',
         providers:[NintendoService],
         loadComponent: ()=>import('./pages/details/details.component').then(comp=>comp.DetailsComponent)
    },
    {
        path:'**' , loadComponent:()=>import('./pages/not-found/not-found.component').then(comp=>comp.NotFoundComponent)
    }
];
