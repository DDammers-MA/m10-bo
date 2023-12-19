import { Component } from '@angular/core';
import projects from '../../assets/json/info.json';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';



@Component({
  selector: 'app-projecten',
  standalone: true,
  imports: [ CommonModule, RouterModule, ProjectDetailComponent ],
  templateUrl: './projecten.component.html',
  styleUrl: './projecten.component.scss'
})
export class ProjectenComponent {
 
  projecten = projects.projecten;

  constructor() {
    console.log(this.projecten);
  }
}

