import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';

import { ProductAddEditComponent } from '../product/product-add-edit/product-add-edit.component';


@Injectable()
export  class ProductEditGuard implements CanDeactivate<ProductAddEditComponent> {

    canDeactivate(component: ProductAddEditComponent): boolean {
        if (component.movieForm.dirty) {
            let title = component.movieForm.get('title').value || 'New Product';
            return confirm(`Navigate away and lose all changes to ${title}?`);
        }
        return true;
    }
}
