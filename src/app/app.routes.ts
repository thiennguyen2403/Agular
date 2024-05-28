import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LayoutClinentComponent } from './components/layout-client/layout-clinent.component';
import { DoashboardComponent } from './pages/admin/doashboard/doashboard.component';

import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { RegistrationFormComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutClinentComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: 'home',
        redirectTo: '/',
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
    { path: '', component: DoashboardComponent },
    {
      path:'product-add',
      component:ProductAddComponent
    },
    { path: 'edit/:id', component: EditProductComponent }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationFormComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
