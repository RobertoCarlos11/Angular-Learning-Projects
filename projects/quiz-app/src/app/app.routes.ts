import { Routes } from '@angular/router';

const appRoutes = [{
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
},
{
    path: 'quiz',
    loadComponent: () => import('./pages/quiz/quiz.component').then(m => m.QuizComponent),
},
{
    path: "**",
    redirectTo: 'home',
}]

export const routes: Routes = [...appRoutes];
