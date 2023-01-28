import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
const MaterialComponents: any = [
  MatTreeModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MaterialComponents
  ],
  exports: [
    ...MaterialComponents
  ]
})
export class MaterialModule { }
