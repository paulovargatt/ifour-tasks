import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserDescPage } from './user-desc.page';
import {AnimateRefModule} from 'ngx-animate-ref';

const routes: Routes = [
  {
    path: '',
    component: UserDescPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AnimateRefModule.forRoot({defaultTransition: '1s ease-in-out all', enableBlur: true})
  ],
  declarations: [UserDescPage]
})
export class UserDescPageModule {}
