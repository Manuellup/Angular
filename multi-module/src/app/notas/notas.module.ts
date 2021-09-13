import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotasComponent } from './notas/notas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NotasComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NotasComponent,

  ]
})
export class NotasModule { }
