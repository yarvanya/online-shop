import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductInterface} from './product-interface';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: any;
  closeResult: string;
  count = 0;
  selectedProductsList = [];
  totalPrice = 0;
  isProductBought = false;

  currentProduct: any;

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getProducts().subscribe(response => {
      this.products = response;
    });
  }

  open(content, ariaLabelledBy, product) {
    if (product) {
      this.currentProduct = product;
    }
    this.modalService.open(content, {ariaLabelledBy: ariaLabelledBy}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  getProducts(): Observable<ProductInterface> {
    return this.http.get<ProductInterface>('./assets/products.json');
  }

  buyProduct(product) {
    this.count = this.count + 1;
    this.isProductBought = true;

    if (this.selectedProductsList.includes(product)) {
      const index = this.selectedProductsList.indexOf(product);
      this.selectedProductsList[index].quantity = this.selectedProductsList[index].quantity + 1;
    } else {
      this.selectedProductsList.push(product);
    }

    this.selectedProductsList.forEach(selectedProduct => {
      this.totalPrice = this.totalPrice + (selectedProduct.price * selectedProduct.quantity);
    });
  }

  closeAlert() {
    this.isProductBought = false;
  }
}
