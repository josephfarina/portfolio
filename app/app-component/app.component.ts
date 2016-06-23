import { Component, OnInit } from '@angular/core';
import { CCFormComponent } from '../projects/form/form.component'
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [
        CCFormComponent,
        ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit {
    private showEnabled: boolean = false;

    ngOnInit() {

        this.showEnabled = false;
    }
}


// stupid hack to have a blank router at times when others arent selected
@Component({ selector: 'blank', template: '' }) export class EmptyComponent { }
