import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DomController, Platform} from '@ionic/angular';

@Component({
    selector: 'app-nubank',
    templateUrl: './nubank.page.html',
    styleUrls: ['./nubank.page.scss'],
})
export class NubankPage implements OnInit {
    detaly;
    pageDown = false;

    entered = false;

    @ViewChild('itemPan') itemPan: ElementRef;

    constructor(public domCtrl: DomController,
                public renderer: Renderer2,
                private platform: Platform
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.entered = true;
        }, 500);
    }

    onSwipe(e) {
        if (e.deltaY > 0) {
            this.pageDown = true;
        } else {
            this.pageDown = false;
        }
    }

    onTap(e) {
        const newTop = e.center.y - 240;
        const platHeight = this.platform.height() - 250;
        if (newTop > 0 && newTop < platHeight) {
            this.domCtrl.write(() => {
                requestAnimationFrame(() => {
                    this.detaly = newTop;
                });
            });
        }
        if (e.additionalEvent === 'panup') {
            if (newTop > 0 && newTop < platHeight) {
                this.domCtrl.write(() => {
                    requestAnimationFrame(() => {
                        this.detaly = newTop;
                    });
                });
            }
        }
        if (e.additionalEvent === 'pandown' && e.isFinal) {
            console.log(e);
            if (this.detaly < 150) {
                this.detaly = 0;
            }
            if (newTop > 300) {
                this.detaly = this.detaly;
            }
        }

        console.log(newTop);
        if (newTop > 70) {
            this.pageDown = true;
        }
        if (newTop < 300) {
            this.pageDown = false;
        }
        // if (this.detaly < 0) {
        //     this.pageDown = false;
        // }

        // if (newTop > 10 && newTop < 150) {
        //     this.detaly = 0;
        //     this.pageDown = false;
        // }

        //console.log(newTop);
        // if (newTop > 0) {
        //     this.domCtrl.write(() => {
        //         // this.renderer.setStyle(this.itemPan.nativeElement, 'bottom', newLeft + 'px');
        //         this.renderer.setStyle(this.itemPan.nativeElement, 'transform', 'translateY' + (newTop) + 'px');
        //     });
        // }

        // if (this.detaly > -150) {
        //     this.pageDown = false;
        //     this.detaly = 0;
        // }
    }

}
