import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  ModalController
} from "ionic-angular";
import { Chapter4Page } from "../chapter4/chapter4";
import { Chapter6Page } from "../chapter6/chapter6";
import { TocPage } from "../toc/toc";

/**
 * Generated class for the Chapter5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-chapter5",
  templateUrl: "chapter5.html"
})
export class Chapter5Page {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad Chapter4Page");
  }
  public onToc(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(TocPage);
    modal.present();
  }

  public onPrevious(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter4Page);
    modal.present();
  }
  public onNext(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter6Page);
    modal.present();
  }
}
