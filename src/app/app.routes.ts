import { Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { EditProductComponent } from './Components/Admin/edit-product/edit-product.component';
import { InsertProductComponent } from './Components/Admin/inser-product/insert-product.component';
import { ListProductsComponent } from './Components/Admin/list-products/list-products.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ObsAndOperatorComponent } from './Components/obs-and-operator/obs-and-operator.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { ProudctsComponent } from './Components/proudcts/proudcts.component';
import { RegisterNewUserComponent } from './Components/register-new-user/register-new-user.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';
import { userGuardGuard } from './Guards/user-guard.guard';

export const routes: Routes = [
    // {path:'' , component:HomeComponent,title:'Home Page'},
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:ProductParentComponent,title:'Home Page'},
    {path:'About',component:AboutUsComponent,title:'About Us Page'},
    {path:'Contact',component:ContactUsComponent,title:'Contact Us Page'},
    {path:'Products',component:ProudctsComponent,title:'Products Page',canActivate:[userGuardGuard]},
    {path:'cart',component:CartComponent,title:'Cart Page'},
    {path:"ObsAndOperator",component:ObsAndOperatorComponent,title:'ObsAndOperator Page'},
    {path:'products-details/:id',component:ProductDetailsComponent,title:'Products Details Page'},
    {path:'InsertProduct',component:InsertProductComponent,title:'Insert New Product Page'},
    {path:'EditProduct/:id',component:EditProductComponent,title:'Edit Page'},
    {path:'ListProduct',component:ListProductsComponent,title:'List Products Page'},
    {path:'UserLogin',component:UserAuthComponent,title:'User Login Page'},
    {path:'UserRegister',component:RegisterNewUserComponent,title:'User Register Page'},
    {path:'UserLogout',component:UserAuthComponent,title:'User Logout Page'},
    // wildcard route 
    {path:'**',component:NotFoundPageComponent,title:'Not Found Page'}
];
