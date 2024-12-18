import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CartListComponent }
];

@NgModule({
  declarations: [CartListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class CartModule {}