import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {GroceriesService} from "../../data-services/services/GroceriesService";
import {ProductModel} from "../../data-services/models/ProductModel";

@IonicPage()
@Component({
  selector: 'page-bucket',
  templateUrl: 'bucket.html',
})
export class BucketPage {
  groceriesList: ProductModel[] = [];
  isAlive = true;
  constructor(private groceriesService: GroceriesService) {
    this.groceriesService.fakeItemsList$.takeWhile(x=>this.isAlive).subscribe(list=>{
      this.groceriesList = list.filter(p=>p.isInBucket);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BucketPage');
  }

}
