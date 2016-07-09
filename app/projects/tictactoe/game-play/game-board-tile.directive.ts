import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[ttc-tile]'
})

export class GameBoardTileDirective {
    @Input('ttc-tile') tileType: string;
    @HostBinding() class = this.tileType;
}
