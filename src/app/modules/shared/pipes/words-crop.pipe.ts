import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordsCrop',
})
export class WordsCropPipe implements PipeTransform {
  transform(value: string, numberOfWords: number): string {
    let result = '';
    result = value.split(' ').slice(0, numberOfWords).join(' ');
    return result;
  }
}
