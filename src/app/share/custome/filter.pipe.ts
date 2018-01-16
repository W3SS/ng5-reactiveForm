import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from '../../ram/product/products';

@Pipe({
    name: 'searchFilter'
  })

  export class SearchFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: IProduct) =>
            product.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
  }