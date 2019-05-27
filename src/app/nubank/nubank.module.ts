import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NubankPage } from './nubank.page';
import {HammerModule} from 'ngx-hammer';

const routes: Routes = [
  {
    path: '',
    component: NubankPage
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
  declarations: [NubankPage]
})
export class NubankPageModule {}
