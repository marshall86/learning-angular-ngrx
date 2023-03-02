import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationsComponent } from './translations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationsRoutingModule } from './translations-routing.module';
import { StoreModule } from '@ngrx/store';
import { messageFeature } from '../../store/message/message.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslationsRoutingModule,
    StoreModule.forFeature(messageFeature)
  ],
  declarations: [
    TranslationsComponent
  ]
})
export class TranslationsModule { }