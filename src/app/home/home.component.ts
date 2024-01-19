import { Component , Input, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import projects from '../../assets/json/info.json';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule ,],
  templateUrl: './home.component.html', 
  styleUrl: './home.component.scss',
  template: ` <button type="button" (click)="onBouwmanagementClick()">Click me!</button>
    <button type="button" (click)="onWerkwijzeClick()">Werkwijze</button>
    <button type="button" (click)=" BMVteamsk()">BMV-teams</button>
    <button class="main__buttonScroll" (click)="scrollToArticle2()">Voor meer info</button>
    
  {{ clickMessage }}`,
})
export class HomeComponent {
  backgroundImage = '../../assets/img/HomeIMG.webp';
  clickMessage = '';
  jsonData: any;


  organisatie = projects.organisatie[0];

    constructor() {
      console.log(this.organisatie);
    }
  

  
    ngOnInit() {
      // Automatically display the first set of text when the page loads
      this.onBouwmanagementClick();
    }
    

  
    onBouwmanagementClick() {
      this.jsonData = this.organisatie;
     
    }
  
  onWerkwijzeClick() {
    this.jsonData = projects.organisatie[1];
 
  }
  
  BMVteams() {
    this.jsonData = projects.organisatie[2];
   
  }
}
