import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';

import {ReactiveFormsModule} from "@angular/forms";@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    
  ],
  exports :[
    SkeletonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ChartModule,
    ReactiveFormsModule,
    ToastModule,
    DialogModule
  ]
})
export class SharedModuleModule { }
