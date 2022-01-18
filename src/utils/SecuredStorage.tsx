import React from 'react';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'

import Product from '../type/Product';
import { SecuredStorageKey } from '../type/SecuredStorageKey';

export default class SecuredStorage {
    public static async saveProductData(productData: Product[]): Promise<void> {
        await RNSecureStorage.set(SecuredStorageKey.PRODUCTS, JSON.stringify(productData), {accessible: ACCESSIBLE.WHEN_UNLOCKED})
    }

    public static async getProductsData(): Promise<Product[]> {
        const data: Product[] = await SecuredStorage.getJson(SecuredStorageKey.PRODUCTS);
        return data;
    }

    private static async getJson(key: string): Promise<any> {
        try {
          const data = await RNSecureStorage.get(key);
          if (data) {
            return JSON.parse(data);
          }
        } catch (err) {
        }
        return null;
      }
    
      private static async getString(key: string): Promise<string | null> {
        try {
          const data = await RNSecureStorage.get(key);
          return data;
        } catch (err) {
        }
        return null;
      }
}