import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";
import {FullListPageModule} from "../pages/full-list/full-list.module";
import {BucketPageModule} from "../pages/bucket/bucket.module";
import {GroceriesService} from "../data-services/services/GroceriesService";
import {DirectivesModule} from "../directives/directives.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SettingsPageModule} from "../pages/settings/settings.module";
import {ProductEditPageModule} from "../pages/product-edit/product-edit.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    FullListPageModule,
    BucketPageModule,
    DirectivesModule,
    SettingsPageModule,
    ProductEditPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GroceriesService
  ]
})
export class AppModule {}
