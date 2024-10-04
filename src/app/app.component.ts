import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProudctsComponent } from './Components/proudcts/proudcts.component';
import { FormsModule } from '@angular/forms';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ObsAndOperatorComponent } from './Components/obs-and-operator/obs-and-operator.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ObsAndOperatorComponent,FooterComponent,ProudctsComponent,FormsModule,ProductParentComponent,CartComponent,AboutUsComponent,ContactUsComponent,HomeComponent,ProductDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce-standalone';
}
