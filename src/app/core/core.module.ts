import {NgModule} from '@angular/core';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {RouteReuseStrategy} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HammerModule} from 'ngx-hammer';
import {HttpClientModule} from '@angular/common/http';
import {AnimateRefModule} from 'ngx-animate-ref';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FivethreeCoreModule} from '@fivethree/core';
@NgModule({
    declarations: [],
    imports: [
        IonicModule.forRoot({animated: false}),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        HammerModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FivethreeCoreModule,
        AnimateRefModule.forRoot({defaultTransition: '0.5s ease-in-out all', enableBlur: true}),
    ],
    exports: [
        BrowserModule,
        IonicModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
})
export class CoreModule {
}
