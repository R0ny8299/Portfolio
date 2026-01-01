import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../servises/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent implements OnInit {
  skills: { skill: string; progress: string }[] = [];

  ngOnInit(): void {
    this.skills = [
      { skill: 'C#', progress: '90%' },
      { skill: '.NET CORE', progress: '88%' },
      { skill: 'MVC Core', progress: '85%' },
      { skill: 'Kafka', progress: '80%' },
      { skill: 'Golang', progress: '85%' },
      { skill: 'Beego', progress: '80%' },
      { skill: 'Gin', progress: '77%' },
      { skill: 'Concurrency', progress: '85%' },
      { skill: 'Angular', progress: '90%' },
      { skill: 'TypeScript', progress: '88%' },
      { skill: 'JavaScript', progress: '80%' },
      { skill: 'HTML', progress: '80%' },
      { skill: 'CSS', progress: '80%' },
      { skill: 'KendoJS', progress: '60%' },
      { skill: 'SQL', progress: '80%' },
      { skill: 'PostgreSQL', progress: '70%' },
      { skill: 'Oracle SQL', progress: '70%' },
      { skill: 'AWS', progress: '70%' },
    ];
  }
}
