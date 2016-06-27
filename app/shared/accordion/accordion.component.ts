import {Component, Input, OnDestroy} from '@angular/core';
import {DomSanitizationService, SafeResourceUrl} from '@angular/platform-browser';
import { PrismJsDirective } from "./../prismjs/prismjs.directive";
import { CodeblockComponent } from "./../prismjs/codeblock.component";

@Component({
  moduleId: module.id,
  selector: 'accordion',
  templateUrl: 'accordion.component.html',
  host: {
    'class': 'panel-group'
  }
})
export class Accordion {
  groups: Array<AccordionGroup> = [];
  
  addGroup(group: AccordionGroup): void {
    this.groups.push(group);
  }
  
  closeOthers(openGroup: AccordionGroup): void {
    this.groups.forEach((group: AccordionGroup) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }
  
  removeGroup(group: AccordionGroup): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}



@Component({
  moduleId: module.id,
  selector: 'accordion-group',
  directives: [PrismJsDirective, CodeblockComponent],
  templateUrl: 'accordion-group.component.html'
})

export class AccordionGroup implements OnDestroy {
  private _isOpen: boolean = false;
  constructor(
    private accordion: Accordion,
    private sanitationService:DomSanitizationService) {
      this.accordion.addGroup(this);
  }

  //   constructor(private sanitationService:DomSanitizationService) {
  //   this.url = sanitationService.bypassSecurityTrustResourceUrl('http://plnkr.co/img/plunker.png');
  // }

  @Input() heading: string;
  @Input() plnkrLink: string;
  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }
  
  get isOpen() {
    return this._isOpen;
  }
  
  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }
  
  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
}