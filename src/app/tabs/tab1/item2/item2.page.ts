import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-item21',
  templateUrl: 'item2.page.html',
})
export class Item2Page {
  constructor(
    private readonly navController: NavController,
  ) {}

  public goBack(): Promise<void> {
    return this.navController.pop();
  }
}
