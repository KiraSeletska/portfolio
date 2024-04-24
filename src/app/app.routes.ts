import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'projects', component: ProjectsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }