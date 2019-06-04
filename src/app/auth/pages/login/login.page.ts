import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {AuthOptions, AuthTypes} from '../../../core/services/auth.types';
import {OverlayService} from '../../../core/services/overlay.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {FivLoadingContent} from '@fivethree/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    authForm: FormGroup;
    authProvider = AuthTypes;
    configs = {
        isSignin: true,
        action: 'login',
        actionChange: 'Criar Conta'
    };
    private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

    @ViewChild('content') content: FivLoadingContent;

    constructor(private fb: FormBuilder,
                private auth: AuthService,
                private overlay: OverlayService,
                private nav: NavController,
                private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.createForm();
    }

    private createForm() {
        this.authForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    changeAuthAction() {
        this.configs.isSignin = !this.configs.isSignin;
        const {isSignin} = this.configs;
        console.log(isSignin);
        this.configs.action = isSignin ? 'Login' : 'Signup';
        this.configs.actionChange = isSignin ? 'Create Account' : 'Login';
        !isSignin ? this.authForm.addControl('name', this.nameControl) : this.authForm.removeControl('name');
    }

    async OnSubmit(provider: AuthTypes) {
        const loading = await this.overlay.loading();
        try {
            const credentials = await this.auth.authenticate({
                isSignin: this.configs.isSignin,
                user: this.authForm.value,
                provider
            });
            this.nav.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/tasks');

        } catch (e) {
            console.log('Error', e);
            await this.overlay.toast({message: e.message});
        } finally {
            loading.dismiss();
        }
    }

    get email(): FormControl {
        return <FormControl> this.authForm.get('email');
    }

    toggle(e) {
        setTimeout(() => {
           this.content.completeRefresh();
        }, 500);
        //   this.fiv.enabled = false;
    }

    get name(): FormControl {
        return <FormControl> this.authForm.get('name');
    }

    get password(): FormControl {
        return <FormControl> this.authForm.get('password');
    }

}
