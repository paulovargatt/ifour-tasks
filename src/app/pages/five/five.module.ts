import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {FivePage} from './five.page';
import {FivAppBarModule, FivBottomSheetModule, FivExpandableModule, FivFeatureDiscoveryModule, FivIconModule} from '@fivethree/core';
import {LottieModule} from '@fivethree/lottie';

const routes: Routes = [
    {
        path: '',
        component: FivePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FivExpandableModule,
        FivAppBarModule,
        FivIconModule,
        LottieModule,
        FivBottomSheetModule,
        FivFeatureDiscoveryModule,
        RouterModule.forChild(routes)
    ],
    declarations: [FivePage]
})
export class FivePageModule {
}
