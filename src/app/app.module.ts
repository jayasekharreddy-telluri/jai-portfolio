import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import routing module

// Import components
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';  // You can import FooterComponent here too

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    FooterComponent  // Add FooterComponent to declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Include routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
