import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Category } from '../../shared/model/category';


@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input()
  currentCategory?: Category;
 
}

