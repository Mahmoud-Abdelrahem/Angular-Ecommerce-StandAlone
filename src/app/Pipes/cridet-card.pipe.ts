import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cridetCard',
  standalone: true
})
export class CridetCardPipe implements PipeTransform {

  transform(value: string): string {
    let result = '';
    for (let i = 0; i < value.length; i += 4) {
      if (i > 0) {
        result += ' - ';
      }
      result += value.substring(i, i + 4);
    }

    return result;
  }
  }
