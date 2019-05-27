import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/pages/login/login.module#LoginPageModule' },
  { path: 'testes', loadChildren: './testes/testes.module#TestesPageModule' },
  { path: 'animate-ref', loadChildren: './animate-ref/animate-ref.module#AnimateRefPageModule' },
  { path: 'user-desc/:id', loadChildren: './animate-ref/user-desc/user-desc.module#UserDescPageModule' },
  { path: 'nubank', loadChildren: './nubank/nubank.module#NubankPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
