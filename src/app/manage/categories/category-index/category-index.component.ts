import { CategoryMockService } from '../../../services/category-mock.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.scss']
})
export class CategoryIndexComponent implements OnInit {

  data: Observable<Array<Category>>;

  constructor(private categoryMockService: CategoryMockService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const { data, queryParams } = this.route.snapshot;
    this.data = data.items;
  }

}
