import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './components/product/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HttpClientModule,
  ],
  providers: [
    ProductService,
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

}
