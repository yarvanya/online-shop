import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CarouselComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
