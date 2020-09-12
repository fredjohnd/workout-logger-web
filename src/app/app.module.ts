// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

// Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CategoryIndexComponent } from './manage/categories/category-index/category-index.component';
import { WorkoutIndexComponent } from './workouts/workout-index/workout-index.component';
import { ManageIndexComponent } from './manage/manage-index/manage-index.component';
import { MatRippleModule } from '@angular/material/core';
import { CategoryDetailComponent } from './manage/categories/category-detail/category-detail.component';
import { ExerciseIndexComponent } from './manage/exercises/exercise-index/exercise-index.component';
import { ExerciseDetailComponent } from './manage/exercises/exercise-detail/exercise-detail.component';
import { WorkoutDetailComponent } from './workouts/workout-detail/workout-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryIndexComponent,
    WorkoutIndexComponent,
    ManageIndexComponent,
    CategoryDetailComponent,
    ExerciseIndexComponent,
    ExerciseDetailComponent,
    WorkoutDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
