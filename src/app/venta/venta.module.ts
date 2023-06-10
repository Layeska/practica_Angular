import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { HistorialVentasComponent } from './historial-ventas/historial-ventas.component';


@NgModule({
  declarations: [
    ListadoComponent,
    NuevaVentaComponent,
    HistorialVentasComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule
  ]
})
export class VentaModule { }
