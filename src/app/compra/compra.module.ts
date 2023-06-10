import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { HistorialCompraComponent } from './historial-compra/historial-compra.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';

@NgModule({
  declarations: [
    ListadoComponent,
    HistorialCompraComponent,
    NuevaCompraComponent
  ],
  exports: [
    ListadoComponent,
    HistorialCompraComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})

export class CompraModule { }
