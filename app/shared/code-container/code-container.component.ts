import { Component, Input } from '@angular/core';
import { Accordion, AccordionGroup } from './../accordion/accordion.component';
import { CodeblockComponent } from "./../prismjs/codeblock.component";
import { PrismJsDirective } from "./../prismjs/prismjs.directive";

@Component({
  moduleId: module.id,
  selector: 'my-code-container',
  templateUrl: './code-container.component.html',
  styleUrls: ['code-container.component.css'],
  directives: [
    Accordion, 
    AccordionGroup,
    PrismJsDirective, 
    CodeblockComponent]
})

export class CodeContainer {
  // create an interface for this later
  @Input('codeFiles') codeFiles: any[];
  isOpen = false;
}
