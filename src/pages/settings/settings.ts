import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, ToastController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {GroceriesService} from "../../data-services/services/GroceriesService";
import {ProductModel} from "../../data-services/models/ProductModel";
import {ProductEditPage} from "../product-edit/product-edit";


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  groceriesList: ProductModel[] = [];

  constructor(public navCtrl: NavController,
              private modalsCtrl: ModalController,
              private toastCtrl: ToastController,
              private groceriesService: GroceriesService) {
    this.groceriesService.fakeItemsList$.subscribe(list => {
      this.groceriesList = list;
    });
  }

  doneClicked() {
    this.navCtrl.setRoot(HomePage);
  }

  editItem(item: ProductModel) {
    let editModal = this.modalsCtrl.create(ProductEditPage, {data: item});
    editModal.present();

    editModal.onDidDismiss(data => {
      if (data instanceof ProductModel) {
        if (!!data.id) {
          this.groceriesService.update(data).subscribe(() => {
            this.toastCtrl.create({
              message: `Product ${data.name} was edited`,
              duration: 3000,
              position: 'top'
            })
          });
        } else {
          this.groceriesService.create(data).subscribe(() => {
            this.toastCtrl.create({
              message: `Product ${data.name} was added to list`,
              duration: 3000,
              position: 'top'
            })
          });
        }
      }
    });
  }

  createItem() {
    let item = new ProductModel();
    this.editItem(item);
  }

  deleteItem(id) {
    this.groceriesService.deleteById(id).subscribe(() => {
      this.toastCtrl.create({
        message: `Product was deleted`,
        duration: 3000,
        position: 'top'
      })
    });
  }
}
