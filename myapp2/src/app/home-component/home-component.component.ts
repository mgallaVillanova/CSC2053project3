import { RECIPES } from '../recipes'; 
import { Component, OnInit } from '@angular/core';

export class HomeComponent implements OnInit {
  recipes = RECIPES; 
  
  constructor() { }
  
  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {

}
