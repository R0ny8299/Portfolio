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

    this.cvUrl =  this.profileService.projects.resumeurl;
  }
 
    downloadPdf(): void {
      const pdfUrl = 'assets/ROHIT-SINGH-2025.pdf';
    
      fetch(pdfUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'DownloadedFile.pdf';
          a.click();
          window.URL.revokeObjectURL(url);
        });
    }
  
}
