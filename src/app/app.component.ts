// Angular
import { Component } from '@angular/core';
// Translate
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title = 'angular-starter-kit';

    constructor(private _translate: TranslateService) {
        this._translate.setDefaultLang('en');
    }
}
