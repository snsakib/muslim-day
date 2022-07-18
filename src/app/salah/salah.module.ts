import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalahRoutingModule } from './salah-routing.module';
import { SalahComponent } from './salah.component';


@NgModule({
  declarations: [
    SalahComponent
  ],
  imports: [
    CommonModule,
    SalahRoutingModule
  ]
})
export class SalahModule { }
