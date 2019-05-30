import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },



  { path: 'testes', loadChildren: './testes/testes.module#TestesPageModule' },
  { path: 'animate-ref', loadChildren: './animate-ref/animate-ref.module#AnimateRefPageModule' },
  { path: 'user-desc/:id', loadChildren: './animate-ref/user-desc/user-desc.module#UserDescPageModule' },
  { path: 'nubank', loadChildren: './nubank/nubank.module#NubankPageModule' },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule', canLoad: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
