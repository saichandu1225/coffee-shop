import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyvaluePipe } from './keyvalue.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    KeyvaluePipe
  ],
  declarations: [KeyvaluePipe],
  providers:[KeyvaluePipe]
})
export class PipesModule { }
