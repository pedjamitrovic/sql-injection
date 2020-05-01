import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { SqliClientService } from '../sqli-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  pagedProducts: any[];
  pageSize = 3;

  constructor(private service: SqliClientService) {}

  ngOnInit() {
    this.service.getProducts().subscribe((products) => {
      this.products = products.sort((a, b) => (a.paidPromotion === b.paidPromotion) ? 0 : a.paidPromotion ? -1 : 1);
      this.pagedProducts = this.products.slice(0, this.pageSize);
    });
  }

  public pageChanged(event: any) {
    this.pagedProducts = this.products.slice(
      event.pageIndex * event.pageSize,
      event.pageIndex * event.pageSize + event.pageSize
    );
  }
}
