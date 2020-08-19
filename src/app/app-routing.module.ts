import { ManageIndexComponent } from './containers/manage/manage-index/manage-index.component';
import { WorkoutIndexComponent } from './containers/workouts/workout-index/workout-index.component';
import { CategoryIndexComponent } from './containers/manage/categories/category-index/category-index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'admin', children: [
    {path: 'categories/index', component: CategoryIndexComponent}
  ]},
  {path: 'workouts', component: WorkoutIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
