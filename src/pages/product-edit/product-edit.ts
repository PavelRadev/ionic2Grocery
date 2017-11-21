import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {ProductModel} from "../../data-services/models/ProductModel";
import * as _ from 'lodash';

/**
 * Generated class for the ProductEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-edit',
  templateUrl: 'product-edit.html',
})
export class ProductEditPage {
  model:ProductModel = null;
  inputMaxLength = 27;
  inputCharactersLeft = 0;

  constructor(private view: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let navData = this.navParams.get('data');
    if(navData instanceof ProductModel){
      this.model = _.cloneDeep(navData);
      this.countInputCharactersLeft();
    }
  }

  countInputCharactersLeft(){
    let currentInputLength = (!!this.model) ? this.model.name.length : 0;
    this.inputCharactersLeft = this.inputMaxLength - currentInputLength;
  }

  closeModal(){
    this.view.dismiss();
  }

  doneClicked(){
    this.view.dismiss(this.model);
  }
}
