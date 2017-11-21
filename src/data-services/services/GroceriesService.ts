import {Injectable} from "@angular/core";
import {ProductModel} from "../models/ProductModel";
import {BaseClientServiceNonHttp} from "./BaseClientServiceNonHttp";

@Injectable()
export class GroceriesService extends BaseClientServiceNonHttp<ProductModel>{
  constructor(){
    super();
    this.fakeItemsList = [
      new ProductModel('1','Milk 1l'),
      new ProductModel('2','Eggs Medium 12 pack'),
      new ProductModel('3','Fresh Basil'),
      new ProductModel('4','Wholegrain Bread 1 pkg'),
      new ProductModel('5','Ground Coffee 200g',true),
      new ProductModel('6','Red Wine'),
      new ProductModel('7','Mozzarella Cheese 150g',true),
      new ProductModel('8','Orange juice 1l'),
      new ProductModel('9','Tomatoes')
    ];

    this.emitListUpdateSubject();
  }
}
