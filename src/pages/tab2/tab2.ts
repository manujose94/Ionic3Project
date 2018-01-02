import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController  } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { UserDetailPage } from '../user-detail/user-detail';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  users: any[] = [];
  loader; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider,public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  
    this.myLoadingPresent();
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        console.log(data);
        this.users = data['recordset'];
        this.loader.dismiss();
      },
      (error) =>{
        console.error(error);
        this.loader.dismiss();
      }
    )
  }


  myLoadingPresent() {
  
    this.loader = this.loadingController.create({
    content: 'Loading... Please wait.'
    });
    this.loader.present();
    }

    
    openUserDetail(user) {
      this.navCtrl.push(UserDetailPage, user);
  }

}
