import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../servises/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent  implements OnInit {
  skills: { skill: string; progress: string }[] = [];

  ngOnInit(): void {
    this.skills = [
      { skill: '.NET CORE', progress: '88%' },
      { skill: 'MVC', progress: '85%' },
      {skill:'SQL', progress: '80%'},
      {skill:'PostgreSQL', progress: '70%'},     
      { skill: 'Angular', progress: '90%' },
      { skill: 'TypeScript', progress: '88%' },
      { skill: 'JavaScript', progress: '80%' },
      { skill: 'HTML', progress: '80%' },
      { skill: 'CSS', progress: '80%' },
      { skill: 'AWS', progress: '70%' },
      { skill: 'KendoJS', progress: '60%' },
    
    ];
  }
}
