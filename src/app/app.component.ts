import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {Kml} from '../decorators.factorties';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app',
    template: `
    <div>
      <h2>{{ '100___il mio titolo' | translate }}</h2>
      <h2>{{ '120___il mio titolo 3' | translate }}</h2>
      <h2 translate >101___HOME.TITLE2</h2>
      <label>
        {{ '10___HOME.SELECT' | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
          <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
        </select>
      </label>
    </div>
  `,
})
@Kml({
  name: 'APP-COMPONENT'
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');

        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        console.log(this);
    }
}
