import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    
    {
      id: 1,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      mediumlink: 'rohitjsingh.com',
      imgUrl: 'assets/images/z30.jpg',
      tech: 'Angular'
    },

    {
      id: 2,
      title: 'P-Mech Technology Company Web site.',
      desc: '',
      mediumlink: 'https://www.pmechtech.com',
      imgUrl: 'assets/images/z29.jpg',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

    {
      id: 3,
      title: 'Matrimonial Website',
      desc: '',
      mediumlink: '',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = `Software Developer with 5+ years of experience in designing and developing scalable, secure web
and enterprise applications using .NET Core, Angular, and MVC. Proven expertise in API creation,
CI/CD pipeline configuration, and database management. Skilled in leading Agile teams to deliver
high-quality solutions within deadlines.`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  exprienceData: any = [
    {
      id: 1,
      company: 'ICICI Lombard Pvt Ltd',
      location: 'Mumbai',
      timeline: 'April 2024 to Present',
      role: 'Software Developer',
      work: `Technologies : Angular 14+, .net Core , MySQL , PostgreSQL , AWS .
      ICICI Lombard General Insurance specializes in health, motor, home, travel, and business insurance leveraging technology for efficient service delivery.',
      `
    },
    {
      id: 2,
      company: 'Pinnacle Technologies Pvt Ltd ',
      location: 'Mumbai',
      timeline: 'July 2022 to April 2024',
      role: 'Software Developer',
      work: `Technologies : Angular 10+, .net Core , MySQL  , AWS .
      Worked on the web application built in Angular for different business and Campaigns .
      Contributed on developing designed and developed a secure payment module for processing transactions.`
    },
    {
      id: 3,
      company: 'P-Mech Technologies Pvt Ltd',
      location: 'Mumbai',
      timeline: 'September 2021 - July 2022',
      role: 'Software Developer',
      work: `Technologies : Angular , .NET , MVC , SQL .
      Developed PMT Tank Software, a tool for designing and verifying storage tanks compliant with API
650 standards.Designed and deployed a full-stack web application, seamlessly integrating front-end
and back-end systems.`
    },
   
    {
      id: 4,
      company: 'Preventine Life Care Pvt Ltd',
      location: 'Mumbai',
      timeline: 'February 2021 - September 2022',
      role: 'Software Developer',
      work: `Technologies : .NET , MVC , KendoJS , SQL .
      Preventive Life Care is a leading genetics laboratory offering screening and predictive testing
services.Developed core functionalities for UTICA and PLIMS applications, enabling real-time
sample tracking and automated report generation.`
    },
    {
      id: 5,
      company: 'Zior Info Tech Pvt Ltd',
      location: 'Delhi',
      timeline: 'August 2019 - November 2021',
      role: 'Assistant System Engineer Trainee',
      work: `Technologies : .NET , MVC , SQL .
      Zior Info Tech develops software solutions for healthcare, insurance, and associations.Delivered reliable, scalable, and customized software solutions tailored to healthcare
and insurance client requirements.`
    },

  ]


  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

 
}
