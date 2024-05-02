import { Component } from '@angular/core';

@Component({
  selector: 'trial-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
experiences = [

  {
    id: 1,
    company:'AMALITECH',
    position: 'FRONTEND (NSP)',
    details: [
      'Developed team Alpha project website using React JS',
      'AWS re/start cohort 1',
      'Upskilling in Angular and Rust Programming Language',
      'Created Inbrowser Markdown Web Application -Typescrpt project'
    ],
    startDate: '0ct 2023',
    endDate: 'Present'
  },
  {
    id: 2,
    company:'Qliq Integrations',
    position: 'FRONTEND (Intern)',
    details: [
      'Designing User Interfaces of web application',
      'Upskilling in code igniter for PHP project',
      'Understanding basic of UI/UX',
      
    ],
    startDate:'Aug 2022',
    endDate: 'Oct 2022'

  }



]













}
