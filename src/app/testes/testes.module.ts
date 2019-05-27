import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestesPage } from './testes.page';
import { HammerModule } from 'ngx-hammer';

const routes: Routes = [
  {
    path: '',
    component: TestesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HammerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestesPage]
})
export class TestesPageModule {}
