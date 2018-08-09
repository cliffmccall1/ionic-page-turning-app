import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  ModalController
} from "ionic-angular";
import { Chapter3Page } from "../chapter3/chapter3";
import { Chapter2Page } from "../chapter2/chapter2";
import { Chapter1Page } from "../chapter1/chapter1";
import { Chapter6Page } from "../chapter6/chapter6";
import { Chapter5Page } from "../chapter5/chapter5";
import { Chapter4Page } from "../chapter4/chapter4";

@IonicPage()
@Component({
  selector: "page-toc",
  templateUrl: "toc.html"
})
export class TocPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TocPage");
  }

  public onCover(): void {
    this.viewCtrl.dismiss();
  }

  public onChpOne(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter1Page);
    modal.present();
  }

  public onChpTwo(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter2Page);
    modal.present();
  }

  public onChpThree(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter3Page);
    modal.present();
  }
  public onChpFour(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter4Page);
    modal.present();
  }
  public onChpFive(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter5Page);
    modal.present();
  }
  public onChpSix(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter6Page);
    modal.present();
  }
}
