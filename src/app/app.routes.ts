import { Routes } from '@angular/router';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
    //se usa para vistas anidadas
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path: '',
                loadComponent: ()=> import('./domains/products/pages/list/list.component').then(m=>m.ListComponent)
            },
            {
                path: 'about',
                loadComponent: ()=> import('./domains/info/pages/about/about.component') //se pone en el component "default"

            },
            {
                path: 'product/:id',
                loadComponent: ()=>import('./domains/products/pages/product-detail/product-detail.component')
                //component: ProductDetailComponent
            }
            
        ]
    },
    {
        path:'**',
        component: NotFoundComponent
    }
];
