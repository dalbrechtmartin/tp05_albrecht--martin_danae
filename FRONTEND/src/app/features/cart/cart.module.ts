import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CartListComponent
  },
  { path: '', redirectTo: 'cart', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: 'cart' }, // Redirection pour les chemins inexistant
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartListComponent,
    RouterModule.forChild(routes)
  ]
})
export class CartModule {}