import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import projects from '../../assets/json/info.json';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, ],
})
export class ProjectDetailComponent implements OnInit {
  projecten = projects.projecten;
  project: any; // Adjust the type based on your project data structure
  imagePaths: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('Route Params:', params);
      const projectId = +params['id'];
      this.project = projects.projecten.find(project => project.id === projectId);
      console.log('Project:', this.project);
 });
  }
}


