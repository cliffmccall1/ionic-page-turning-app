import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  ViewController
} from "ionic-angular";
import { TocPage } from "../toc/toc";
import { Chapter3Page } from "../chapter3/chapter3";
import { Chapter5Page } from "../chapter5/chapter5";

/**
 * Generated class for the Chapter4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-chapter4",
  templateUrl: "chapter4.html"
})
export class Chapter4Page {
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
    let modal = this.modalCtrl.create(Chapter3Page);
    modal.present();
  }
  public onNext(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter5Page);
    modal.present();
  }
}
