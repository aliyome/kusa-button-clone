import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeatmapComponent } from './heatmap/heatmap.component';

const materialModules = [MatButtonModule];

@NgModule({
  declarations: [AppComponent, HeatmapComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ...materialModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
