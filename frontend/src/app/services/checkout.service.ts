import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Page } from '../models/page';
import { Checkout } from '../models/checkout';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestUtil } from './rest-util';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private readonly baseUrl = environment.backendUrl + '/api/checkout';

  constructor(
    private http: HttpClient,
  ) {
  }

  getCheckouts(page: number): Observable<Page<Checkout>> {
    const filter = { pageIndex: page };
    const url = this.baseUrl + '/getCheckouts';
    const params = RestUtil.buildParamsFromPageRequest(filter);
    return this.http.get<Page<Checkout>>(url, { params });
  }

  getCheckout(checkoutId: string): Observable<Checkout> {
    const url = this.baseUrl + '/getCheckout';
    const params = new HttpParams().set('checkoutId', checkoutId);
    return this.http.get<Checkout>(url, {params});
  }

  saveCheckout(checkout: Checkout): Observable<void> {
    const url = this.baseUrl + '/saveCheckout';
    return this.http.post<void>(url, checkout);
  }

  deleteCheckout(checkoutId: string): Observable<void> {
    const url = this.baseUrl + '/deleteCheckout';
    const params = new HttpParams().set('checkoutId', checkoutId);
    return this.http.delete<void>(url, {params});
  }
}
