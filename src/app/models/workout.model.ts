export class Workout {
  id: string;
  startDateTime: Date;
  endDateTime: Date;
  description: string;
  plan: WorkoutExerciseGroup[];
}

export interface WorkoutExerciseGroup {
  isCategory?: boolean;
  categoryId?: string;
  isSuperset?: boolean;
  exercises: WorkoutExercise[];
}

export interface WorkoutExercise {
  id: string;
  exerciseId: string;
  categoryId?: string;
  isDropset?: boolean;
  values: string[];
}
