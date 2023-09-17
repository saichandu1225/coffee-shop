import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: string): string {
    //$12.5
    return `$${parseFloat(value).toFixed(2)}`;
  }
}
