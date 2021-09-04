import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'upper'
})
export class UpperPipe implements PipeTransform {
    transform(value: string | null): string {
        if (!value) {
            return '';
        }
        return value.toUpperCase();
    }
}
