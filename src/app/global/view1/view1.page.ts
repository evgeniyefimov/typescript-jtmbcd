import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view1',
  templateUrl: 'view1.page.html'
})
export class View1Page {
  constructor(
    private readonly navController: NavController,
  ) {}

  public goBack(): Promise<void> {
    return this.navController.pop();
  }
}
