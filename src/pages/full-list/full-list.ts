import {Component, OnDestroy} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {GroceriesService} from "../../data-services/services/GroceriesService";
import {ProductModel} from "../../data-services/models/ProductModel";
import {SettingsPage} from "../settings/settings";

@IonicPage()
@Component({
  selector: 'page-full-list',
  templateUrl: 'full-list.html'
})
export class FullListPage implements OnDestroy{
  groceriesList: ProductModel[] = [];
  isAlive = true;
  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              private groceriesService: GroceriesService) {

    this.groceriesService.fakeItemsList$.takeWhile(x=>this.isAlive).subscribe(list=>{
      this.groceriesList = list;
    });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  openSettings(){
    this.navCtrl.setRoot(SettingsPage);
  }

  addToBucket(item: ProductModel){
    item.isInBucket = true;
    this.groceriesService.update(item).subscribe(item=>{
      this.toastCtrl.create({
        message: `Product ${item.name} was added to cart`,
        duration: 3000,
        position: 'top'
      })
    });
  }

  removeFromBucket(item: ProductModel){
    item.isInBucket = false;
    this.groceriesService.update(item).subscribe(item=>{
      this.toastCtrl.create({
        message: `Product ${item.name} was removed from cart`,
        duration: 3000,
        position: 'top'
      })
    });
  }
}
