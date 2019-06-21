import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'item1',
        loadChildren: './item1/item1.module#Item1Module',
      },
      {
        path: 'item2',
        loadChildren: './item2/item2.module#Item2Module',
      },
      {
        path: '',
        redirectTo: '/tabs/tab1/item1',
        pathMatch: 'full'
      }
    ])
  ],
})
export class Tab1PageModule {}
