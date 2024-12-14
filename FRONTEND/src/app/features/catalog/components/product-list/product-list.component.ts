import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../../../shared/models/product.model';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products?: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products = new Observable<Product[]>();
  }

  ngOnInit() {
    // Appel initial pour récupérer tous les produits
    this.productService.getAllProducts().subscribe();
    this.products = this.productService.products$;
  }
}