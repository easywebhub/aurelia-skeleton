import {inject, bindable, bindingMode , customAttribute  } from 'aurelia-framework';

//import * as $ from "jquery";

@customAttribute("ui-dropdown")
@inject(Element)
export class UIDropdown {
  element: any;
   @bindable({ defaultBindingMode: bindingMode.twoWay }) vdrop
  

  constructor(element) {
    this.element = element;
    this.vdrop = "";
  }

  attached() {


//($('.ui.dropdown')as any).dropdown();
// A $( document ).ready() block.
// $( document ).ready(function() {
        
    //console.log('this.valueDrop',this.vdrop)

($('.ui.dropdown') as any).dropdown('set selected', this.vdrop)
  

    
   
    ($('.ui.dropdown') as any)
  .dropdown({
        onChange: function(value, text, $selectedItem) {
        console.log('value change',value);
    }
  })
  
  }
  


}
