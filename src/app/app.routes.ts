import { Routes } from '@angular/router';
import { NintendoService } from './services/nintendo.service';

export const routes: Routes = [
    {path:'',redirectTo:'listado', pathMatch:'full'},
    {
        path:'listado',
         providers:[NintendoService],
         loadComponent: ()=>import('./pages/listado/listado.component').then(comp=>comp.ListadoComponent)
    },

    {
        path:'details/:id',
         providers:[NintendoService],
         loadComponent: ()=>import('./pages/details/details.component').then(comp=>comp.DetailsComponent)
    }
];
