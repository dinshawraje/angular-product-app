import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    HeadBarComponent,
    ProductListComponent,
    ProductAlertsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

