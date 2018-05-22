import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxElectronModule} from 'ngx-electron';
import { AppComponent } from './app.component';
import {CdkTableModule} from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import { DialogEditContact } from './contacts/contacts.edit.component';
import { LayoutModule } from '@angular/cdk/layout';

//Routing

import {routing,appRoutingProviders} from "./app.routing";
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { SearchComponent } from './search/search.component';
import { ResponsiveCardsDirective } from './responsive-cards.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    CotizacionesComponent,
    ContactsListComponent,
    SearchComponent,
    ResponsiveCardsDirective,
    DialogEditContact
  ],
  entryComponents: [DialogEditContact],
  imports: [
    BrowserModule,
    FormsModule,
      CdkTableModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
      BrowserAnimationsModule,
      LayoutModule,
      NgxElectronModule,
      routing,
      ReactiveFormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
