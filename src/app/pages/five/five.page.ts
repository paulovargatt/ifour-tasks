import {Component, OnInit, ViewChild} from '@angular/core';
import {DrawerState, FivFeature} from '@fivethree/core';
import {LottieAnimation, LottieParams} from '@fivethree/lottie';

@Component({
    selector: 'app-five',
    templateUrl: './five.page.html',
    styleUrls: ['./five.page.scss'],
})
export class FivePage implements OnInit {

    public toggled = false;

    shouldBounce = true;
    dockedHeight = 170;
    distanceTop = 52;
    drawerState = DrawerState.Bottom;
    states = DrawerState;
    minimumHeight = 25;
    @ViewChild('feature') feature: FivFeature;
    @ViewChild('feature2') feature2: FivFeature;

    handle = true;
    float = true;
    rounded = true;

    lottieParams: LottieParams = {
        path: 'assets/lotties/weather-storm.json',
        renderer: 'canvas',
        loop: true
    };

    confetiParams: LottieParams = {
        path: 'assets/lotties/confeti.json',
        renderer: 'canvas',
        loop: false
    };


    constructor() {
    }

    ngOnInit() {
    }

    onAnimationCreated(animation: LottieAnimation) {
        animation.play();
        animation.setSpeed(1.1);
        console.log('aki');
    }

    onAnimationConfeti(animation: LottieAnimation) {
        animation.play();
        animation.setSpeed(0.5);
        setTimeout(() => {
            animation.destroy();
        }, 4000);
        //  animation.destroy();
    }

    public tutorial = false;

    show() {
        this.tutorial = true;
        this.feature.show();
    }

    hide() {
        this.tutorial = false;
        this.feature.hide();
        this.feature2.hide();
        this.tutorialSuccess = true;
    }

    public tutorialSuccess = false;

    confetiSuccess() {

    }

    openDrawer() {
        if (this.tutorial) {
            this.feature.hide();
            this.feature2.show();
        } else {
            this.drawerState = 2;
        }
    }

    tutorialTwo() {
        this.feature.hide();
        this.feature2.show();
    }

    clickIcon() {
        this.toggled = !this.toggled;
    }

}
