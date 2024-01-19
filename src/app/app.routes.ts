import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectenComponent } from './projecten/projecten.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { OrganisatieComponent } from './organisatie/organisatie.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'Contact', component: ContactComponent },
    { path: 'Projecten', component: ProjectenComponent },
    { path: 'project/:id', component: ProjectDetailComponent },
    { path: "Organisatie", component: OrganisatieComponent },
  
    
];
