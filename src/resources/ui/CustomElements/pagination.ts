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
  defaultBindingMode: bindingMode.twoWay,
 })
@bindable totalRecords
@bindable pageSize
page=0
constructor()
 {
    this.pageSize=2
    this.totalRecords=10
    this.page=this.totalRecords/this.pageSize
  }
  //  @bindable vl=0
    

  // pages = 0
  // indexArray: any = []
  // index = 1
  // constructor(bindingEngine) {

  //   this.pageSize = 10
  //   this.totalRecords = 0
  //   this.pageNumber = 1;
  //   this.current = 1
  //   this.indexArray = this.indexs()
  //   let subscriptioncurrent = bindingEngine.propertyObserver(this, 'current')
  //     .subscribe(() => {
  //       this.indexArray = this.indexs()
  //     });

  //   this.pages = Math.ceil(this.totalRecords / this.pageSize)
  //     //subscriptioncurrent.dispose();
  // }

  // firstPageNumber() {
  //   //console.log('first',this.current);

  //   return this.current = 1
  // }
  // lastPageNumber() {


  //   return this.current = this.pages
  // }
  // NextPage() {
  //   return this.current < this.pages ? this.current++ : this.pages
  // }
  // PreviousPage() {
  //   if (this.current == 1)
  //     return this.current
  //   return this.current--
  // }

  // btnClick(index) {

  //   return this.current = index

  // }
  // indexs() {
  //   let left = 1;

  //   let right = this.pages
  //   let ar: any = []
  //   if (this.pages >= 11) {
  //     if (this.current > 5 && this.current < this.pages - 4) {
  //       left = this.current - 5
  //       right = this.current + 4
  //     } else {
  //       if (this.current <= 5) {
  //         left = 1
  //         right = 10
  //       } else {
  //         right = this.pages
  //         left = this.pages - 9
  //       }
  //     }
  //   }
  //   while (left <= right) {
  //     ar.push(left)
  //     left++
  //   }

  //   return ar
  // }

}
