import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './sections/contact/contact.component'; 
import { HomeComponent } from './sections/home/home.component'; 
import { ProjectsComponent } from './sections/projects/projects.component'; 
import { NgModule } from '@angular/core';
import { SkillsComponent } from './sections/skills/skills.component'; 

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
