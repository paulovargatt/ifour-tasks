import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-testes',
    templateUrl: './testes.page.html',
    styleUrls: ['./testes.page.scss'],
})
export class TestesPage implements OnInit {

    public detaly;
    public active;

    constructor() {
    }

    ngOnInit() {
    }

    onSwipe(e) {
        requestAnimationFrame(() => {
            if (e.deltaY < 0) {
                this.active = true;
            } else {
                this.active = false;
            }
        });
    }

    onTap(e) {

    }

}
