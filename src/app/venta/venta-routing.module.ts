import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialVentasComponent } from './historial-ventas/historial-ventas.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'nueva', pathMatch: 'full'},
      { path: 'nueva', component: NuevaVentaComponent},
      { path: 'historial', component: HistorialVentasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
