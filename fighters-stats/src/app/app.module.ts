import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FightersComponent } from './fighters/fighters.component';
import { FighterComponent } from './fighter/fighter.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CategoryComponent } from './category/category.component';
import {FighterDetailsComponent} from "./fighter/fighter-details/fighter-details.component";

@NgModule({
  declarations: [
    AppComponent,
    FightersComponent,
    FighterComponent,
    FighterDetailsComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
