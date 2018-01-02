import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider) {
    this.user = this.navParams.data;
    console.log('constructor UserDetailPage');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
    //this.user = this.navParams.data;
   /** this.userService.getUsersfindById(this.user.NRepresentante).then(
      data => this.user =  data['recordset'].slice(0, 1)
    
  );**/
  console.log('this.user '+this.user.Nombre);
  }

}
