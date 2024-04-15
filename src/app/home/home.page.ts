import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonIcon, IonButton } from '@ionic/angular/standalone';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions, MaskitoElementPredicate } from '@maskito/core';
import { maskitoWithPlaceholder } from '@maskito/kit';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonInput, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, MaskitoDirective],
})
export class HomePage {

  hideSSN = false;
  readonly ssnMask: MaskitoOptions = {
    ...maskitoWithPlaceholder('xxx-xx-xxxx'),
    mask: [
      ...Array(3).fill(/\d/),
      '-',
      ...Array(2).fill(/\d/),
      '-',
      ...Array(4).fill(/\d/),
    ]
  };
  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();
  constructor() { }
}
