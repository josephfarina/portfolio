import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({ selector: '[ttc-tiletype-detector]' })

export class TileTypeDirective {
    private _classToBind: string = 'null';
    @Input() private tileType: number = 2;

    @HostListener('click') onClick() {
        if (this.tileType === 0) { this._classToBind = 'x'; }
        if (this.tileType === 1) { this._classToBind = 'o'; }
        if (this.tileType === 2) {  this._classToBind = 'null'; }
    }

    @HostBinding('class.o') o() {
        if (this._classToBind === 'o') { return true; }
    }
}
