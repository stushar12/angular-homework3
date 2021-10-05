import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { ElementComponent } from './element/element.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { MainComponent } from './main/main.component';

const routes: Routes = 
[
  {
    path:'',
    component:MainComponent
  },
  {
    path:'home',
    component:MainComponent
  },
  {
    path:'category',
    component:CategoryComponent
  },
  {
    path:'about-section',
    component:AboutSectionComponent
  },
  {
    path:'latest-news',
    component:LatestNewsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'element',
    component:ElementComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'blog-details',
    component:BlogDetailsComponent
  },
  {
    path:'details',
    component:DetailComponent
  },
  {
    path:'news/:id',
    component:DetailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[MainComponent,MainComponent,CategoryComponent,AboutSectionComponent,LatestNewsComponent,
ContactComponent,ElementComponent,BlogComponent,BlogDetailsComponent,DetailComponent,DetailComponent]