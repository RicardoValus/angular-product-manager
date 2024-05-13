import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Product } from '../product-create/product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { RouterLink } from '@angular/router';

registerLocaleData(localePt)

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    RouterLink
  ],
  providers: [{
    provide: LOCALE_ID, //converte os valores pra br
    useValue: 'pt-BR' //converte os valores pra br
  }],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit {

  products!: Product[]
  displayedColumns = [
    'id',
    'name',
    'price',
    'action'
  ]

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}
