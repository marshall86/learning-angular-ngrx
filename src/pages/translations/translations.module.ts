import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationsComponent } from './translations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationsRoutingModule } from './translations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslationsRoutingModule
  ],
  declarations: [
    TranslationsComponent
  ]
})
export class TranslationsModule { }