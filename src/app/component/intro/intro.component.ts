import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../servises/profile.service';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  cvUrl: any
  constructor(private profileService:ProfileService) { }

  ngOnInit() {

    this.cvUrl =  ''
  }

}
