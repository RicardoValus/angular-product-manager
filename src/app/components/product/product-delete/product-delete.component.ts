import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../product-create/product.model';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButtonModule
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {

  product!: Product

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,


  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto Deletado com Sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
