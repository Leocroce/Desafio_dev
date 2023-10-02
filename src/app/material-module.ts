import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatPaginatorModule } from "@angular/material/paginator"
import { MatSortModule } from "@angular/material/sort"
import { MatTableModule } from "@angular/material/table"
import { MatInputModule } from "@angular/material/input"
import { MatDialogModule } from "@angular/material/dialog"
import { MatSelectModule } from "@angular/material/select"
import { MatRadioModule } from "@angular/material/radio"
import { MatCheckboxModule } from "@angular/material/checkbox"
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule
  ]
})

export class MaterialModule{}
