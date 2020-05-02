import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { SqliClientService } from '../sqli-client.service';
import { FormGroup, FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  pagedProducts: any[];
  pageSize = 3;
  searchForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(
    private service: SqliClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.name) {
        this.getProducts(params.name);
      } else {
        this.getProducts('');
      }
    });
  }

  public pageChanged(event: any) {
    this.pagedProducts = this.products.slice(
      event.pageIndex * event.pageSize,
      event.pageIndex * event.pageSize + event.pageSize
    );
  }

  public getProducts(name: string) {
    this.service
      .getProducts(name)
      .pipe(take(1))
      .subscribe((products: Product[]) => {
        this.products = products.sort((a, b) =>
          a.paidPromotion === b.paidPromotion ? 0 : a.paidPromotion ? -1 : 1
        );
        this.pagedProducts = this.products.slice(0, this.pageSize);
      });
  }

  public search() {
    const queryParams: any = {};
    if (this.searchForm.controls.name.value) {
      queryParams.name = this.searchForm.controls.name.value;
    }
    this.router.navigate(['/products'], {
      queryParams,
    });
  }
}
