import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [
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
