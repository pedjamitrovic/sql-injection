import { Observable, of } from 'rxjs';

const products: Product[] = [
  {
    id: 1,
    sellerId: 1,
    name: 'Intel i3 procesor',
    price: 200,
    paidPromotion: true,
  },
  {
    id: 2,
    sellerId: 1,
    name: 'Intel i5 procesor',
    price: 300,
    paidPromotion: false,
  },
  {
    id: 3,
    sellerId: 2,
    name: 'Intel i7 procesor',
    price: 400,
    paidPromotion: false,
  },
  {
    id: 4,
    sellerId: 3,
    name: 'Acer Aspire laptop',
    price: 900,
    paidPromotion: true,
  },
  {
    id: 5,
    sellerId: 4,
    name: 'Logitech tastatura',
    price: 50,
    paidPromotion: false,
  },
];

export class Product {
  id: number;
  sellerId: number;
  name: string;
  price: number;
  paidPromotion: boolean;

  static Mock(): Observable<Product[]> {
    return of(products);
  }
}
