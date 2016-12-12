import {
  customElement,
  bindable,
  computedFrom,
  bindingMode,
  BindingEngine,inject
} from 'aurelia-framework';
@inject(BindingEngine)
@customElement('ui-pagination')

export class UIPagination {
  
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) pageSize = 5;totalRecords = 100;pageNumber = 1; 
  
    @bindable current =1

  all:number=20
  indexArray:any = []
  index:number
  constructor(bindingEngine){
   this.indexArray= this.indexs()
     let subscription = bindingEngine.propertyObserver(this.current,'current')
      .subscribe((newValue, oldValue) => {
        this.btnClick(this.index)
        this.NextPage(); 
        this.PreviousPage();
        this.firstPageNumber(); 
      console.debug(newValue, oldValue);
      })

    // unsubscribe
    //subscription.dispose();
  }

  firstPageNumber() {
    console.log('first',this.current);
    return this.current == 1 ? 1 : this.current
  }
  lastPageNumber() {
   
    console.log('last',this.current);
    return this.current == this.all ? this.all : this.current
  }
  NextPage(){
    return this.current<this.all?this.current++:this.all
  }
  PreviousPage(){
    console.log('prev',this.current);
      return this.current>1?this.current--:1
  }
  
 btnClick(index) { 
      if (index == this.current) {
        this.current = index
        return this.current
      }
    }
 indexs() {
      let left = 1
      let right = this.all
      let ar = []
      if (this.all >= 11) {
        if (this.current > 5 && this.current < this.all - 4) {
          left = this.current - 5
          right = this.current + 4
        } else {
          if (this.current <= 5) {
            left = 1
            right = 10
          } else {
            right = this.all
            left = this.all - 9
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      
      return this.indexArray=ar
    }

}
