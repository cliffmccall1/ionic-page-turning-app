import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  ViewController
} from "ionic-angular";

import { TocPage } from "../toc/toc";
import { Chapter2Page } from "../chapter2/chapter2";
import { Chapter4Page } from "../chapter4/chapter4";

/**
 * Generated class for the Chapter3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-chapter3",
  templateUrl: "chapter3.html"
})
export class Chapter3Page {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad Chapter3Page");
  }

  public onToc(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(TocPage);
    modal.present();
  }

  public onPrevious(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter2Page);
    modal.present();
  }
  public onNext(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter4Page);
    modal.present();
  }
}
