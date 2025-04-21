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
      title: 'NYSA Motor Insurance',
      desc: 'In the context of ICICI Lombard, "NYSA-Motor" appears to refer to a digital platform or project focused on vehicle insurance. Its described as a tool for suggesting cross-selling and up-selling opportunities, incorporating multiple payment options, multilingual communication, and reducing policy issuance time, according to a document from ICICI Lombard. The platform also leverages technologies like GPS, IoT, and AI for risk management and monitoring.',
      mediumlink: 'nysa.icicilombard.com/#/login',
      imgUrl: 'assets/images/z2.jpg',
      tech: '.Net Core , Angular 18, sql Server , Type Script'
    },
    {
      id: 2,
      title: 'P-Mech Technology .',
      desc: 'PMECH Technologies (PMT) is dedicated to revolutionizing the Energy and Industrial sectors on a global scale. With over 35 years of expertise and experience in engineering and design for 1000s of customers, we are at the forefront of developing innovative software products that transform traditional design practices.Our flagship product, PMT Tank, is a testament to our commitment to innovation and efficiency. This cloud-based software optimizes the design process of industrial storage tanks, adhering to API 650 and EN 14015 guidelines.',
      mediumlink: 'https://www.pmechtech.com',
      imgUrl: 'assets/images/z29.jpg',
      tech: 'HTML, CSS, Bootstrap, Jquery , Java Script'
    },
    
    {
      id: 3,
      title: 'NYSA Plutus Payment',
      desc: 'The Plutus Application offers a versatile solution by incorporating both online and offline payment modules. In the offline module, users can conveniently make payments using cash, cheques, and demand drafts (DD). For online transactions, the application supports contemporary payment methods like credit cards and net banking. Upon successful payment transactions, the application provides users with relevant policies, enhancing the user experience by seamlessly integrating payment completion wit h access to important information and guidelines.',
      mediumlink: 'nysa.icicilombard.com/#/login',
      imgUrl: 'assets/images/z4.jpg',
      tech: '.Net Core , Angular 18, sql Server , Type Script'
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      desc: 'I’m a passionate Full Stack Software Developer with over 5 years of experience in designing and developing scalable, secure web and enterprise applications using .NET Core, Angular, and MVC.'+
'I specialize in building robust APIs, configuring CI/CD pipelines, and managing databases efficiently. Beyond technical skills, I’m a problem-solver at heart—facing challenges with a smile and resolving them quickly and effectively.'+
'I strongly value innovation, time management, and continuous learning. I dont just write code—I bring ideas to life with clean architecture, performance, and purpose',
      mediumlink: 'rohitjsingh.com',
      imgUrl: 'assets/images/z30.jpg',
      tech: 'Angular , HTML , CSS , Angular Matarial , Type Script'
    },

    {
      id: 5,
      title: 'Fleet Managment System',
      desc: 'In the context of ICICI Lombard, "NYSA-Motor" appears to refer to a digital platform or project focused on vehicle insurance. Its described as a tool for suggesting cross-selling and up-selling opportunities, incorporating multiple payment options, multilingual communication, and reducing policy issuance time, according to a document from ICICI Lombard. The platform also leverages technologies like GPS, IoT, and AI for risk management and monitoring.',
      mediumlink: 'nysa.icicilombard.com/#/login',
      imgUrl: 'assets/images/z3.jpg',
      tech: '.Net Core , Angular 18, Postgresql , Type Script'
    },
    {
      id: 6,
      title: 'Nysa-Banca',
      desc: 'Banca Application serves as a mediator bridging the realms of health insurance and motor insurance. Users can seamlessly navigate and choose insurance plans tailored to their specific needs. With an intuitive interface, the application acts as a'+
'guide, assisting users in making informed jecisions by providing valuable insights and recommendations based on their individual requirements. Whether opting for health insurance or motor insurance, users can rely on the application to streamline the selection process, ensuring a personalized and well-informed choice.',
      mediumlink: 'nysa.icicilombard.com/#/login',
      imgUrl: 'assets/images/z6.jpg',
      tech: '.Net Core , Angular 18, Postgresql , Type Script'
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
      role: 'Software Engineer Trainee',
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
