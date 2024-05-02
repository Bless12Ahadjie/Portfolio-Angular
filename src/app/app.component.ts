import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { data } from './data';
import { AppLayoutComponent } from './shared/pages/app-layout/app-layout.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AppLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trial';
  data = data;
  names?: string;
  
  Click(name: string){
    this.names = name;
  }
  

}
