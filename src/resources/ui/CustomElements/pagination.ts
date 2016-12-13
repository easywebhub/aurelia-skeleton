import {
  customElement,
  bindable,
  computedFrom,
  bindingMode,
  BindingEngine,
  inject
} from 'aurelia-framework';
@inject(BindingEngine)
@customElement('ui-pagination')

export class UIPagination {
 @bindable({
  defaultBindingMode: bindingMode.twoWay
 })
@bindable totalRecord=120
@bindable pageSize=10
@bindable pages
@bindable current=1
  numberArr=[]
  
  constructor(bindingEngine) {
  this.pages = Math.ceil(this.totalRecord / this.pageSize)
   
   this.current = 1
    this.numberArr = this.indexs()
    let subscriptioncurrent = bindingEngine.propertyObserver(this, 'current')
      .subscribe(() => {
        this.numberArr = this.indexs()
      });
  }

  firstPageNumber() {
    return this.current = 1
  }
  lastPageNumber() {
    return this.current = this.pages
  }
  NextPage() {
    return this.current < this.pages ? this.current++ : this.pages
  }
  PreviousPage() {
    if (this.current == 1)
      return this.current
    return this.current--
  }
  btnClick(index) {
    return this.current = index
  }
  indexs() {
    let left = 1;
    let right = this.pages
    let ar: any = []
    if (this.pages >= 11) {
      if (this.current > 5 && this.current < this.pages - 4) {
        left = this.current - 5
        right = this.current + 4
      } else {
        if (this.current <= 5) {
          left = 1
          right = 10
        } else {
          right = this.pages
          left = this.pages - 9
        }
      }
    }
    while (left <= right) {
      ar.push(left)
      left++
    }
    return ar
  }
}
