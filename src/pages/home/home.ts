import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { TocPage } from "../toc/toc";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  booktitle = "When In Rome";
  author = "Cliff";

  public onToc(): void {
    let modal = this.modalCtrl.create(TocPage);
    modal.present();
  }
}
