import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  atributoLegal = "qualquer"

  ngOnInit(): void {

  }

  fazerAlgo(): void {
    console.log('Fazendo algo!')
  }

}
