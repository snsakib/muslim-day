import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalahComponent } from './salah.component';

const routes: Routes = [{ path: '', component: SalahComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalahRoutingModule { }
