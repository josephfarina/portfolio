import { Component, Input } from '@angular/core';
import {Accordion, AccordionGroup} from './../accordion/accordion.component';
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
    PrismJsDirective, CodeblockComponent]
})

export class CodeContainer {
  @Input('title') title: string;
  @Input('content') content: string; 
  
  private visible: boolean = false;

  toggleVisible() {
    this.visible = !this.visible;
  }

  isOpen = false;

  groups: Array<any> = [
    {
      heading: 'Dynamic 1',
      content: 'I am dynamic!'
    },
    {
      heading: 'Dynamic 2',
      content: 'Dynamic as well'
    }
  ];

  removeDynamic() {
    this.groups.pop();
  }

}

// $(document).ready(function () {
//   $('.accordion-tabs').each(function(index) {
//     $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
//   });
//   $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
//     if (!$(this).hasClass('is-active')) {
//       event.preventDefault();
//       var accordionTabs = $(this).closest('.accordion-tabs');
//       accordionTabs.find('.is-open').removeClass('is-open').hide();

//       $(this).next().toggleClass('is-open').toggle();
//       accordionTabs.find('.is-active').removeClass('is-active');
//       $(this).addClass('is-active');
//     } else {
//       event.preventDefault();
//     }
//   });
// });
