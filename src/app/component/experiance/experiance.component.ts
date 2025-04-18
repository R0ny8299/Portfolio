import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SplitPipe } from '../../servises/split.pipe';
import { ProfileService } from '../../servises/profile.service';

@Component({
  selector: 'app-experiance',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './experiance.component.html',
  styleUrl: './experiance.component.scss'
})
export class ExperianceComponent implements OnInit {

  workexp: any
  
    constructor(private profileService:ProfileService) { }
  
      ngOnInit() {
  
        this.workexp =  this.profileService.exprience()
      }
  

}
