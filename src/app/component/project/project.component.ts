import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../servises/profile.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-project',
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  config: any;
  projects: any =[];

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.projects = this.profileService.getProjects()
    console.log(this.projects)
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };

    
  }
  handleImgError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/images/gif.gif';
  }
  pageChanged(event: any){
    this.config.currentPage = event;
  }

}
