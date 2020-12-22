import { NgModule } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout'
import { MatChipsModule } from '@angular/material/chips'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatMenuModule } from '@angular/material/menu'
import { MatSliderModule } from '@angular/material/slider'
import { MatTabsModule } from '@angular/material/tabs'
import { MatStepperModule } from '@angular/material/stepper';


import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    imports: [
        MatCheckboxModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        LayoutModule,
        MatChipsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatStepperModule,
        MatInputModule,
        MatGridListModule,
        MatExpansionModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatSliderModule,
        MatTabsModule,
        MatPaginatorModule,
        MatRadioModule,
        MatCardModule,
        MatSelectModule,
        MatDatepickerModule
    ],
    exports: [
        MatCheckboxModule,
        MatRadioModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        LayoutModule,
        MatChipsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatStepperModule,
        MatInputModule,
        MatGridListModule,
        MatSelectModule,
        MatExpansionModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatSliderModule,
        MatTabsModule,
        MatCardModule,
        MatDatepickerModule
    ],
})
export class Material { }
