import { Routes } from '@angular/router';
import { HomeComponent} from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

export const routes: Routes = [{
    path: "",
    component: HomeComponent
},
{
    path: "products",
    component: ProductCrudComponent
},
{
    path: "products/create",
    component: ProductCreateComponent
},
];
