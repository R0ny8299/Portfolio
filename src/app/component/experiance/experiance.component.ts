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
  workexp: any[] = [
    {
      id: 1,
      company: 'ICICI Lombard Pvt Ltd',
      location: 'Mumbai',
      timeline: 'April 2024 to Present',
      role: 'Software Developer',
      work: `Technologies : Angular 14+, .net Core, MySQL, PostgreSQL, AWS. 
      ICICI Lombard General Insurance specializes in health, motor, home, travel, and business insurance leveraging technology for efficient service delivery.
      | Designed, developed and deployed FMS application (Fleet Management System), which completely handles the business of fleet insurance in bulk. Ensuring seamless front-end and back-end integration.
      | Implemented database architecture, designed tables, and optimized queries for high performance, which in turn reduced load on database by 15%.
      | Resolved critical bugs, enhancing system stability and increasing user satisfaction by 25%.
      | Introduced real-time tracking and maintenance scheduling, boosting operational efficiency by 20%.
      | Configured CI/CD pipelines and automated deployment processes, reducing release time by 30%.
      | Developed and optimized APIs, improving data exchange efficiency and integrating third-party services seamlessly.`
    },
    {
      id: 2,
      company: 'Pinnacle Technologies Pvt Ltd',
      location: 'Mumbai',
      timeline: 'July 2022 to April 2024',
      role: 'Software Developer',
      work: `Technologies : Angular 10+, .net Core, MySQL, AWS.
      Worked on the web application built in Angular for different business and Campaigns.
      | Contributed on developing, designed and developed a secure payment module for processing transactions.
      | Integrated APIs to support multiple payment gateways, reducing payment failure rates by 10%.
      | Developed back-end services using microservices architecture, ensuring secure transactions and optimized logging processes.
      | Built intuitive user interfaces with Angular 16, enhancing payment processing efficiency by 30%.
      | Automated build and deployment processes using AWS and GitLab CI/CD, reducing release cycles by 25%.`
    },
    {
      id: 3,
      company: 'P-Mech Technologies Pvt Ltd',
      location: 'Mumbai',
      timeline: 'September 2021 - July 2022',
      role: 'Software Developer',
      work: `Technologies : Angular, .NET, MVC, SQL.
      Developed PMT Tank Software, a tool for designing and verifying storage tanks compliant with API 650 standards.
      | Designed and deployed a full-stack web application, seamlessly integrating front-end and back-end systems.
      | Engineered database schemas to manage large-scale data for tank components, improving query performance by 15%.
      | Built APIs to streamline data exchange between front-end and back-end systems, reducing processing time by 20%.
      | Collaborated with engineers to ensure calculations adhered to API 650 standards and safety protocols.
      | Created responsive designs to optimize user experience across various devices, increasing user adoption rates by 25%.`
    },
    {
      id: 4,
      company: 'Preventine Life Care Pvt Ltd',
      location: 'Mumbai',
      timeline: 'February 2021 - September 2022',
      role: 'Software Developer',
      work: `Technologies : .NET, MVC, KendoJS, SQL.
      Preventive Life Care is a leading genetics laboratory offering screening and predictive testing services.
      | Developed core functionalities for UTICA and PLIMS applications, enabling real-time sample tracking and automated report generation.
      | Designed robust database schemas to securely store and manage client and test data, ensuring 100% data integrity.
      | Wrote business logic in C#, automating sample sorting, test assignments, and result processing, reducing manual effort by 30%.
      | Enhanced user interfaces by integrating AJAX and jQuery, improving usability and reducing page load times by 20%.`
    },
    {
      id: 5,
      company: 'Zior Info Tech Pvt Ltd',
      location: 'Delhi',
      timeline: 'August 2019 - November 2021',
      role: 'Software Engineer Trainee',
      work: `Technologies : .NET, MVC, SQL.
      Zior Info Tech develops software solutions for healthcare, insurance, and associations.
      | Delivered reliable, scalable, and customized software solutions tailored to healthcare and insurance client requirements.
      | Engineered and deployed bespoke applications, improving client operational efficiency by 15%.
      | Built and maintained secure, scalable systems to meet the unique requirements of overseas clients in the healthcare and insurance domains.`
    }
  ];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    // Uncomment if data needs to be fetched from the ProfileService
    // this.workexp = this.profileService.exprience(); 
  }
}