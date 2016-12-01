//import {computedFrom} from 'aurelia-framework';

export class Welcome {
}


export class UpperValueConverter {
  toView(value: string): string {
    return value && value.toUpperCase();
  }
}
