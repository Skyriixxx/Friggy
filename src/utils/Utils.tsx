import React from 'react';
import Product from '../type/Product';

export default class Utils {
    public static getParamFromNavigation(route: any, name: string, defaultValue: Product): Product {
        const params: any = route?.params?.params ?? route?.params;
        // Has param object?
        if (!params) {
          return defaultValue;
        }
        // Get
        const value: Product = params[name];
        // Ok, return the value
        return value;
    }
    public static removeParamsFromNavigation(route: any): void {
        var params: any = route?.params?.params ?? route?.params;
        // Has param object?
        if (!params) {
          return;
        }
        // Get
        params = undefined;
        // Ok, return the value
    }
}