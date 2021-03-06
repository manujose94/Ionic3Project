
import { IonicPage, NavController, NavParams ,Nav } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { TabsPage } from './../tabs/tabs';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * How to Combine Ionic Side Menu and Tabs Navigation!!
 * https://devdactic.com/ionic-side-menu-tabs/
 */

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
// Basic root for our content view
rootPage = 'TabsPage';

pages: PageInterface[] = [
  { title: 'Articulos', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
  { title: 'Usuarios', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts' },
  { title: 'Config', pageName: 'ConfigPage', icon: 'shuffle' },
];

helpMenuItems: PageInterface[] = [
  { title: 'Ayuda', pageName: 'ConfigPage', icon: 'information-circle' },
];

 
// Reference to the app's root nav
@ViewChild(Nav) nav: Nav;

constructor(public navCtrl: NavController, public navParams: NavParams) {

}
ionViewDidLoad() {console.log('ionViewDidLoad MenuPage');}

openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }  

  



}
