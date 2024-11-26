import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsCropPipe } from './pipes/words-crop.pipe';

@NgModule({
  declarations: [WordsCropPipe],
  imports: [CommonModule],
  exports: [WordsCropPipe],
})
export class SharedModule {}
