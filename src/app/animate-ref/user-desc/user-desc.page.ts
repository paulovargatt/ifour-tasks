import {Component, OnInit} from '@angular/core';
import {FakeService} from '../../fake.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
    selector: 'app-user-desc',
    templateUrl: './user-desc.page.html',
    styleUrls: ['./user-desc.page.scss'],
})
export class UserDescPage implements OnInit {

    user;
    userId;

    constructor(private fake: FakeService,
                private route: ActivatedRoute
    ) {

    }

    async ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        await this.fetchUser();
        console.log(this.user);
    }

    async fetchUser() {
        const res = await this.fake.getUser(this.userId) as any;
        this.user = res.data;
    }

}
