import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { GetIntouchComponent } from '../../components/get-intouch/get-intouch.component';
import { ProjectComponent } from '../../components/project/project.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';

@Component({
  selector: 'trial-app-layout',
  standalone: true,
  imports: [HeaderComponent,HeroSectionComponent,GetIntouchComponent,ProjectComponent,FooterComponent,ExperiencesComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css'
})
export class AppLayoutComponent {

}
