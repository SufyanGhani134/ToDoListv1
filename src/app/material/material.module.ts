import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, NativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';

const MaterialComponents = [
  MatFormFieldModule,
  NativeDateModule,
  MatNativeDateModule,
  MatInputModule,
  MatDatepickerModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatTreeModule
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
