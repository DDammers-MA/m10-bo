import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProjectenComponent } from '../projecten/projecten.component';
import { OrganisatieComponent } from '../organisatie/organisatie.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HomeComponent,
    ProjectenComponent,
    OrganisatieComponent,
  ],
   
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  backgroundImage = '../../assets/img/HomeIMG.webp';
  
}
