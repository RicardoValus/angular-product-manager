import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../product-create/product.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatFormFieldModule,
    MatButton,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {

  productForm!: FormGroup

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price)
      })
    })
  }

  updateProduct(): void {
    const product: Product = {
      id: this.route.snapshot.paramMap.get('id'),
      name: this.productForm.get('name')?.value,
      price: this.productForm.get('price')?.value
    };
    this.productService.update(product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    });

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
