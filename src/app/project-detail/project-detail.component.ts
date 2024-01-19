import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import projects from '../../assets/json/info.json';
import { CommonModule } from '@angular/common';

interface ImageObject {
  imageUrl: string;
}

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProjectDetailComponent implements OnInit {
  projecten = projects.projecten;
  project: any; // Adjust the type based on your project data structure
  imagePaths: string[] = [];
  currentIndex = 0;

 
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = +params['id'];
      this.project = projects.projecten.find(project => project.id === projectId);

      this.imagePaths = this.project.image.map((imageObject: ImageObject) => imageObject.imageUrl);

      // Reset currentIndex when a new project is loaded
      this.currentIndex = 0;

      console.log('Project:', this.project);
      console.log('Image Paths:', this.imagePaths);
    });
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.imagePaths.length) % this.imagePaths.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;
  }
  }

