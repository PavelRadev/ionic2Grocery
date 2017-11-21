import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullListPage } from './full-list';

@NgModule({
  declarations: [
    FullListPage,
  ],
  imports: [
    IonicPageModule.forChild(FullListPage),
  ],
})
export class FullListPageModule {}
