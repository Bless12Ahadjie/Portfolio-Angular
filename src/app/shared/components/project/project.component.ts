import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'trial-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  isFlipped = false;
  isFlipped2 = false;
  isFlipped3 = false;

  scrollDirection: 'up' | 'down' = 'up';
  lastScrollTop = 0;

  @HostListener('window:scroll',[])
  onWindowScroll(){
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.scrollDirection = scrollTop > this.lastScrollTop? 'down' : 'up';
    // this.lastScrollTop = scrollTop
  }

  flipCard(){
    this.isFlipped = true;

  }

  unflipCard(){
    this.isFlipped = false;

  }



}
