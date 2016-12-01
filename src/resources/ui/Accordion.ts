import {autoinject} from 'aurelia-framework';

@autoinject 
export class UiAccordionCustomAttribute {
    constructor(private element : Element ){
        
    }
    attached() {
        ($('.ui.accordion') as any)
  .accordion()
;
    }
}