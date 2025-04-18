import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../servises/profile.service';
import { CommonModule } from '@angular/common';
import { SplitPipe } from '../../servises/split.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,SplitPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  about1: any
  about2: any
  email:any="rony.rohitsingh@gmail.com";
  constructor(private profileService:ProfileService) { }
  
    ngOnInit() {
      this.about1 =  this.profileService.about
      this.about2 =  this.profileService.about2
    }
  

}
