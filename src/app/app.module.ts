import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { DetailComponent } from './detail/detail.component';
import { ElementComponent } from './element/element.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    routingComponents,
    MainComponent,
    AboutSectionComponent,
    BlogDetailsComponent,
    BlogComponent,
    CategoryComponent,
    ContactComponent,
    LatestNewsComponent,
    DetailComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
