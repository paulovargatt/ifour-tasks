import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.page.html',
    styleUrls: ['./tasks-list.page.scss'],
})
export class TasksListPage implements OnInit {

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
    }

    logout() {
        this.auth.logout()
    }

}
