import { WorkoutDetailResolver } from './workouts/workout-detail/workout-detail.resover';
import { WorkoutDetailComponent } from './workouts/workout-detail/workout-detail.component';
import { WorkoutIndexResolver } from './workouts/workout-index/workout-index.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CategoryIndexComponent } from './manage/categories/category-index/category-index.component';
import { CategoryDetailComponent } from './manage/categories/category-detail/category-detail.component';

import { ExerciseIndexComponent } from './manage/exercises/exercise-index/exercise-index.component';
import { ExerciseDetailComponent } from './manage/exercises/exercise-detail/exercise-detail.component';

import { WorkoutIndexComponent } from './workouts/workout-index/workout-index.component';

import { ManageIndexComponent } from './manage/manage-index/manage-index.component';

// Resolvers
import { CategoryIndexResolver } from './manage/categories/category-index/category.index-resolver';
import { CategoryDetailResolver } from './manage/categories/category-detail/category.detail-resolver';

import { ExerciseIndexResolver } from './manage/exercises/exercise-index/exericse-index.resolver';
import { ExerciseDetailResolver } from './manage/exercises/exercise-detail/exercise-detail.resolver';

const routes: Routes = [

  {path: 'workouts', children: [
    {path: '', pathMatch: 'full', component: WorkoutIndexComponent, resolve: {items: WorkoutIndexResolver}},
    {path: ':id', component: WorkoutDetailComponent, resolve: {item: WorkoutDetailResolver}}
  ]},

  {path: 'admin', children: [

    {path: '', pathMatch: 'full', component: ManageIndexComponent},

    {path: 'categories', children: [
      {path: '',    component: CategoryIndexComponent,  resolve: {items: CategoryIndexResolver}},
      {path: ':id', component: CategoryDetailComponent, resolve: {item: CategoryDetailResolver}}
    ]},

    {path: 'exercises', children: [
      {path: '', component: ExerciseIndexComponent, resolve: {items: ExerciseIndexResolver}},
      {path: ':id', component: ExerciseDetailComponent, resolve: {item: ExerciseDetailResolver}}
    ]}]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

