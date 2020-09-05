import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { CategoryMockService } from 'src/app/services/category-mock.service';
import { Category } from 'src/app/models/category';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  data: Category;
  exercises: Observable<Array<Exercise>>;

  constructor(private categoryMockService: CategoryMockService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const { data, queryParams } = this.route.snapshot;
    this.data = data.item;
  }

}
