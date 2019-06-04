import {Component, OnInit} from '@angular/core';
import {FakeService} from '../fake.service';

@Component({
    selector: 'app-animate-ref',
    templateUrl: './animate-ref.page.html',
    styleUrls: ['./animate-ref.page.scss'],
})
export class AnimateRefPage implements OnInit {

    public users;

    constructor(private fake: FakeService) {
    }

    async ngOnInit() {
        await this.fetchUser();
        console.log(this.users);
    }

    async fetchUser() {
        const res = await this.fake.getUsers(3) as any;
        this.users = res.confeti;
    }

}
