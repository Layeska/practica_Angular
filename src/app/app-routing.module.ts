import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
import { HistorialCompraComponent } from './compra/historial-compra/historial-compra.component';
import { NuevaCompraComponent } from './compra/nueva-compra/nueva-compra.component';
import { authGuard } from './auth.guard';
import { FormulariosComponent } from './formularios/formularios.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', redirectTo: 'pipes', pathMatch: 'full'},
  { path: 'pipes', component: PipesComponent},
  { path: 'estructura', component: EstructuralComponent },
  { path: 'compra', component: ListadoComponent, canActivate: [authGuard], children: [
    { path: 'historial', component: HistorialCompraComponent},
    { path: 'nueva', component: NuevaCompraComponent}
  ]},
  { path: 'venta', loadChildren: () => import('./venta/venta.module').then((m) => m.VentaModule)},
  { path: 'forms', component: FormulariosComponent},
  { path: 'todos', component: TodosComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
