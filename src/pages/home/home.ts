import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FullListPage} from "../full-list/full-list";
import {BucketPage} from "../bucket/bucket";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  tab1Component:any;
  tab2Component:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1Component = FullListPage;
    this.tab2Component = BucketPage;
  }
}
