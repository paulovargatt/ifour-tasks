import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {LoginPage} from './login.page';
import {SharedModule} from '../../../shared/shared.module';
import {FivethreeCoreModule, FivExpandableModule, FivLoadingContentModule, FivPullModule} from '@fivethree/core';

const routes: Routes = [
    {
        path: '',
        component: LoginPage
    }
];

@NgModule({
    imports: [
        SharedModule,
        FivPullModule,
        RouterModule.forChild(routes),
        FivethreeCoreModule,
        FivLoadingContentModule
    ],
    declarations: [LoginPage]
})
export class LoginPageModule {
}
