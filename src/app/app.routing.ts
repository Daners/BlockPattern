import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {ContactsComponent} from './contacts/contacts.component';
import {CotizacionesComponent} from './cotizaciones/cotizaciones.component';

const appRoutes:Routes = [

  {path:"",component:ContactsComponent },
  {path:"contacts",component:ContactsComponent },
  {path:"cotizaciones",component:CotizacionesComponent   },
  {path:"**",component:ContactsComponent}
]

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
