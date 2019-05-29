import {Injectable} from '@angular/core';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {AlertOptions, LoadingOptions, ToastOptions} from '@ionic/core';

@Injectable({
    providedIn: 'root'
})
export class OverlayService {

    constructor(private alertController: AlertController,
                private loadingController: LoadingController,
                private toastController: ToastController) {
    }

    async alert(opts?: AlertOptions) {
        const alert = await this.alertController.create(opts);
        await alert.present();
        return alert;
    }

    async loading(opts?: LoadingOptions) {
        const loading = await this.loadingController.create({
            message: 'Aguarde', ...opts
        });
        await loading.present();
        return loading;
    }

    async toast(opts?: ToastOptions) {
        const toast = await this.toastController.create({
            position: 'bottom',
            duration: 3000,
            showCloseButton: true,
            closeButtonText: 'Ok', ...opts
        });
        await toast.present();
        return toast;
    }

}
